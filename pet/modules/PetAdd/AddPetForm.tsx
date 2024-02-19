'use client';
import { Box, MenuItem, InputAdornment, Typography, Button } from '@mui/material';
import { useForm } from 'react-hook-form';
import { Fira_Sans_Condensed } from 'next/font/google';
import { IPetDetail, MedicalRecord } from '../../services/api/v1/pets/type';
import { CustomTextField, ColorButton } from '../../components/CustomInput/type';
import ImageUploader from '../../components/ImageDropbox';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import MedicalRecordForm from '../../components/MedicalRecordForm';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Close';

import {
    GridRowsProp,
    GridRowModesModel,
    GridRowModes,
    DataGrid,
    GridColDef,
    GridToolbarContainer,
    GridActionsCellItem,
    GridEventListener,
    GridRowId,
    GridRowModel,
    GridRowEditStopReasons,
  } from '@mui/x-data-grid';
  import { randomId } from '@mui/x-data-grid-generator';
import useCreatePet from '../../services/api/v1/pets/useCreatePet';


const fira_sans_condensed = Fira_Sans_Condensed({ weight: ['600'], subsets: ['latin'] });

const SEX_CHOICES = [
    { label: 'Male', value: 'Male' },
    { label: 'Female', value: 'Female' },
];

const CATEGORY_CHOICES = [
    { label: 'Dog', value: 'dog' },
    { label: 'Cat', value: 'cat' },
    { label: 'Bird', value: 'bird' },
];

const SPECIES_CHOICES = [
    { label: 'Pug', value: 'Pug' },
    { label: 'Puddle', value: 'Puddle' },
    { label: 'Samoi', value: 'Samoi' },
];

const initialRows:GridRowsProp = [ { id:randomId(),  medical_id: 'med1', medical_date: 'date1', description: 'desc1'} ];
  
interface EditToolbarProps {
  setRows: (newRows: (oldRows: GridRowsProp) => GridRowsProp) => void;
  setRowModesModel: (
    newModel: (oldModel: GridRowModesModel) => GridRowModesModel,
  ) => void;
}

function EditToolbar(props: EditToolbarProps) {
  const { setRows, setRowModesModel } = props;

  const handleClick = () => {
    const id = randomId();
    setRows((oldRows) => [...oldRows, { id, medical_id: '', medical_date: '',description: '', isNew: true }]);
    setRowModesModel((oldModel) => ({
      ...oldModel,
      [id]: { mode: GridRowModes.Edit, fieldToFocus: 'medical_id' },
    }));
  };

  return (
    <GridToolbarContainer>
      <Button color="primary" startIcon={<AddIcon />} onClick={handleClick}>
        Add record
      </Button>
    </GridToolbarContainer>
  );
}

export default function AddPetForm() {

    const router = useRouter()
    const form = useForm<IPetDetail>();

    const [images, setImages] = useState<File[]>([]);
    const [rows, setRows] = useState(initialRows);
    const [rowModesModel, setRowModesModel] = useState<GridRowModesModel>({});

    const handleRowEditStop: GridEventListener<'rowEditStop'> = (params, event) => {
        if (params.reason === GridRowEditStopReasons.rowFocusOut) {
          event.defaultMuiPrevented = true;
        }
      };
    
      const handleEditClick = (id: GridRowId) => () => {
        setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.Edit } });
      };
    
      const handleSaveClick = (id: GridRowId) => () => {
        setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.View } });
      };
    
      const handleDeleteClick = (id: GridRowId) => () => {
        setRows(rows.filter((row) => row.id !== id));
      };
    
      const handleCancelClick = (id: GridRowId) => () => {
        setRowModesModel({
          ...rowModesModel,
          [id]: { mode: GridRowModes.View, ignoreModifications: true },
        });
    
        const editedRow = rows.find((row) => row.id === id);
        if (editedRow!.isNew) {
          setRows(rows.filter((row) => row.id !== id));
        }
      };
    
      const processRowUpdate = (newRow: GridRowModel) => {
        const updatedRow = { ...newRow, isNew: false };
        setRows(rows.map((row) => (row.id === newRow.id ? updatedRow : row)));
        return updatedRow;
      };
    
      const handleRowModesModelChange = (newRowModesModel: GridRowModesModel) => {
        setRowModesModel(newRowModesModel);
      };
    
      const columns: GridColDef[] = [
        { field: 'medical_id', headerName: 'Medical ID', flex: 3, editable: true },
        { field: 'medical_date', headerName: 'Medical Date', flex: 4, editable: true },
        { field: 'description', headerName: 'Description', flex: 7, editable: true },
        {
          field: 'actions',
          type: 'actions',
          headerName: 'Options',
          width: 80,
          cellClassName: 'actions',
          getActions: ({ id }) => {
            const isInEditMode = rowModesModel[id]?.mode === GridRowModes.Edit;
    
            if (isInEditMode) {
              return [
                <GridActionsCellItem
                  icon={<SaveIcon />}
                  label="Save"
                  sx={{
                    color: 'primary.main',
                  }}
                  onClick={handleSaveClick(id)}
                />,
                <GridActionsCellItem
                  icon={<CancelIcon />}
                  label="Cancel"
                  className="textPrimary"
                  onClick={handleCancelClick(id)}
                  color="inherit"
                />,
              ];
            }
    
            return [
              <GridActionsCellItem
                icon={<EditIcon />}
                label="Edit"
                className="textPrimary"
                onClick={handleEditClick(id)}
                color="inherit"
              />,
              <GridActionsCellItem
                icon={<DeleteIcon />}
                label="Delete"
                onClick={handleDeleteClick(id)}
                color="inherit"
              />,
            ];
          },
        },
      ];
    

    const sxTextField = {
        width: '100%',
        boxShadow: '3px 3px #472F05',
        backgroundColor: 'rgb(255, 255, 255)',
        '&:hover': {
            backgroundColor: '#E5CB9A',
            transition: 'ease-in-out',
        },
    };

    const onSubmit = async (data: IPetDetail) => {
        data.seller_id = '65c7356900dfa761aed36122'
        data.is_sold = false
        data.age = Number(data.age)
        data.price = Number(data.price)
        data.weight = Number(data.weight)
        const medic = new Array<MedicalRecord> ()
        rows.map((d) => medic.push({medical_id: d.medical_id, medical_date: d.medical_date, description: d.description}))
        data.medical_records = medic
        const response = await useCreatePet(data)
        if(!response.error) {
            alert('Create Pet Successfully')
            router.push('/user/my-shop')
        }
        else {
            alert('error to create the pet')
        }
    };

    return (
        <Box sx={{ my: '5%', mx: '15%' }}>
            <Box
                sx={{
                    height: 'auto',
                    width: 300,
                    paddingX: 3,
                    paddingY: 1,
                    fontSize: 22,
                    backgroundColor: '#472F05',
                    color: 'whitesmoke',
                    border: '2px solid black',
                    borderBottom: 0,
                    borderTopLeftRadius: 5,
                    borderTopRightRadius: 5,
                    boxShadow: '3px 3px black',
                    textAlign: 'center',
                }}
            >
                Create your new pet HERE!
            </Box>
            <Box
                sx={{
                    py: 5,
                    px: 10,
                    border: '2px solid black',
                    boxShadow: '7px 7px #472F05',
                    backgroundColor: '#FDF6F2',
                }}
            >
                <form onSubmit={form.handleSubmit(onSubmit)} noValidate>
                    <Box
                        sx={{
                            width: '100%',
                            height: 'auto',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '20px',
                        }}
                    >
                        <CustomTextField
                            {...form.register('name')}
                            label="Name"
                            variant="outlined"
                            autoComplete="pet-name"
                            sx={sxTextField}
                        />
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                            }}
                        >
                            <CustomTextField
                                {...form.register('age')}
                                label="Age"
                                variant="outlined"
                                autoComplete="pet-age"
                                sx={sxTextField}
                            />
                            <CustomTextField
                                {...form.register('price')}
                                label="Price"
                                variant="outlined"
                                autoComplete="pet-price"
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <Typography sx={{ fontFamily: fira_sans_condensed.style.fontFamily }}>
                                                ฿
                                            </Typography>
                                        </InputAdornment>
                                    ),
                                }}
                                sx={sxTextField}
                            />
                            <CustomTextField
                                {...form.register('weight')}
                                label="Weight"
                                variant="outlined"
                                type={'text'}
                                autoComplete="pet-weight"
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <Typography sx={{ fontFamily: fira_sans_condensed.style.fontFamily }}>
                                                kg
                                            </Typography>
                                        </InputAdornment>
                                    ),
                                }}
                                sx={sxTextField}
                            />
                        </Box>

                        <CustomTextField
                            {...form.register('description')}
                            label="Description"
                            variant="outlined"
                            autoComplete="pet-description"
                            multiline
                            minRows={3}
                            maxRows={3}
                            sx={{ ...sxTextField }}
                        />
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                            }}
                        >
                            <CustomTextField {...form.register('sex')} select label="Sex" sx={sxTextField}>
                                {SEX_CHOICES.map((option) => (
                                    <MenuItem
                                        key={option.value}
                                        value={option.value}
                                        sx={{
                                            fontFamily: fira_sans_condensed.style.fontFamily,
                                            '&:hover': { backgroundColor: '#F3DDD1' },
                                            '&:focus': { backgroundColor: 'rgb(272, 174, 133) !important' },
                                        }}
                                    >
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </CustomTextField>
                            <CustomTextField {...form.register('category')} select label="Category" sx={sxTextField}>
                                {CATEGORY_CHOICES.map((option) => (
                                    <MenuItem
                                        key={option.value}
                                        value={option.value}
                                        sx={{
                                            fontFamily: fira_sans_condensed.style.fontFamily,
                                            '&:hover': { backgroundColor: '#F3DDD1' },
                                            '&:focus': { backgroundColor: 'rgb(272, 174, 133) !important' },
                                        }}
                                    >
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </CustomTextField>
                            <CustomTextField {...form.register('species')} select label="Species" sx={sxTextField}>
                                {SPECIES_CHOICES.map((option) => (
                                    <MenuItem
                                        key={option.value}
                                        value={option.value}
                                        sx={{
                                            fontFamily: fira_sans_condensed.style.fontFamily,
                                            '&:hover': { backgroundColor: '#F3DDD1' },
                                            '&:focus': { backgroundColor: 'rgb(272, 174, 133) !important' },
                                        }}
                                    >
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </CustomTextField>
                        </Box>
                        <CustomTextField
                            {...form.register('behavior')}
                            label="Behaviour"
                            variant="outlined"
                            type={'text'}
                            autoComplete="pet-behavior"
                            sx={sxTextField}
                        />
                        <Box
                            sx={{
                                fontFamily: fira_sans_condensed.style.fontFamily,
                                width: 400,
                                paddingLeft: 1,
                                paddingRight: 3,
                                fontSize: 20,
                            }}
                        >
                            Medical Records:
                        </Box>
                        <Box sx={{ height: 300, width: '100%' }}>
                            <DataGrid
                                rows={rows}
                                columns={columns}
                                editMode="row"
                                rowModesModel={rowModesModel}
                                onRowModesModelChange={handleRowModesModelChange}
                                onRowEditStop={handleRowEditStop}
                                processRowUpdate={processRowUpdate}
                                slots={{
                                toolbar: EditToolbar,
                                }}
                                slotProps={{
                                toolbar: { setRows, setRowModesModel },
                                }}
                                hideFooter={true}
                            />
                        </Box>
                        <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                            <Box
                                sx={{
                                    fontFamily: fira_sans_condensed.style.fontFamily,
                                    width: 400,
                                    paddingLeft: 1,
                                    paddingRight: 3,
                                    fontSize: 20,
                                }}
                            >
                                Upload Pet Image Here:
                            </Box>
                            <ImageUploader images={images} setImages={setImages} {...form.register('media')} />
                        </Box>

                        <Box
                            sx={{
                                marginTop: 2,
                                backgroundColor: '#FAA943',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                            }}
                        >
                            <ColorButton
                                sx={{
                                    paddingY: 1,
                                    border: '2px solid #472F05',
                                    borderRadius: 0,
                                    boxShadow: '3px 2px #472F05',
                                    fontFamily: fira_sans_condensed.style.fontFamily,
                                    fontSize: 18,
                                }}
                                onClick={form.handleSubmit(onSubmit)}
                            >
                                Add My Pet
                            </ColorButton>
                        </Box>
                    </Box>
                </form>
            </Box>
        </Box>
    );
}
