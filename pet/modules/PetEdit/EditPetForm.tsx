'use client';
import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import SettingsCard from '../../components/SettingsCard';
import { Box, Button, IconButton, Typography } from '@mui/material';
import useGetPetByID from '../../services/api/v1/pets/useGetPetByID';
import { useParams, useRouter } from 'next/navigation';
import { IPetQueryParams } from '../../services/api/v1/pets/type';
import dayjs from 'dayjs';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import ConfirmDialog from '../../components/ConfirmDialog';
import ProfileCard from '../../components/ProfileCard.tsx';
import useDeletePet from '../../services/api/v1/pets/useDeletePet';

export default function EditPetForm() {
    const params = useParams();
    const router = useRouter();
    const [editMode, setEditMode] = useState(false);
    const [openDialog, setOpenDialog] = useState(false);
    const petParams: IPetQueryParams = {
        petId: params?.petId as string,
    };
    const { data: petFullDetail, isSuccess: petSuccess, isError: petError } = useGetPetByID(petParams);

    const handleDelete = async () => {
        console.log('Delete');
    };

    if (!petSuccess) return null;

    return (
        <Box sx={{ alignSelf: 'center', marginTop: 5 }}>
            <ConfirmDialog
                open={openDialog}
                setOpen={setOpenDialog}
                header={`Confirm Delete ${petFullDetail?.name} 🥺?`}
                cancelText="Cancel"
                confirmText="Delete"
                handleConfirm={handleDelete}
            />
            <Box sx={{ px: '5%', textAlign: 'end' }}>
                <Button
                    onClick={() => {
                        setEditMode(!editMode);
                    }}
                    sx={{
                        backgroundColor: 'whitesmoke',
                        color: 'black',
                    }}
                >
                    <EditIcon />
                    <Typography>{`Edit`}</Typography>
                </Button>
                <Button
                    onClick={() => {
                        setOpenDialog(true);
                    }}
                    sx={{
                        backgroundColor: 'whitesmoke',
                        color: 'black',
                    }}
                >
                    <DeleteIcon />
                    <Typography>{`Delete`}</Typography>
                </Button>
            </Box>
            <Grid container direction="column" sx={{ overflowX: 'hidden', flexWrap: 'nowrap' }}>
                <Grid
                    container
                    direction={{ xs: 'column', md: 'row' }}
                    spacing={5}
                    sx={{
                        display: 'flex',
                        flexWrap: 'nowrap',
                        // position: 'absolute',
                        top: '15vh',
                        px: { xs: 5, md: 8 },
                    }}
                >
                    <Grid item md={5} sx={{ alignSelf: 'center' }}>
                        <ProfileCard petImage={petFullDetail.media} />
                    </Grid>

                    <Grid item md={7}>
                        <SettingsCard
                            id={petFullDetail.id}
                            media={petFullDetail.media}
                            seller_id={petFullDetail.seller_id}
                            age={petFullDetail.age}
                            behavior={petFullDetail.behavior}
                            birth={dayjs().format('DD/MM/YYYY')}
                            category={petFullDetail.category}
                            description={petFullDetail.description}
                            is_sold={petFullDetail.is_sold}
                            medical_records={petFullDetail.medical_records}
                            name={petFullDetail.name}
                            price={petFullDetail.price}
                            sex={petFullDetail.sex}
                            species={petFullDetail.species}
                            weight={petFullDetail.weight}
                        />
                    </Grid>
                </Grid>
            </Grid>
            <Box sx={{ marginX: 10, marginTop: 5, marginBottom: 5 }}>
                <Box
                    sx={{
                        height: 'auto',
                        width: 150,
                        paddingX: 3,
                        paddingY: 1,
                        fontSize: 20,
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
                    Description:
                </Box>
                <Box
                    sx={{
                        width: '100%',
                        paddingX: 3,
                        paddingY: 1,
                        fontSize: 16,
                        backgroundColor: 'whitesmoke',
                        border: '2px solid #472F05',
                        boxShadow: '3px 3px black',
                    }}
                >
                    {petFullDetail.description.split('\\n').join('\n')}
                </Box>
            </Box>
        </Box>
    );
}
