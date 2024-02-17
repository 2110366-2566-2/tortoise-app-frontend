'use client';
import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import SettingsCard from '../../components/SettingsCard';
import { Box, Button, IconButton, Typography } from '@mui/material';
import useGetPetByID from '../../services/api/v1/pets/useGetPetByID';
import { useParams, useRouter } from 'next/navigation';
import { IPetDetail, IPetQueryParams, IPetUpdateParams } from '../../services/api/v1/pets/type';
import dayjs from 'dayjs';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import ConfirmDialog from '../../components/ConfirmDialog';
import ProfileCard from '../../components/ProfileCard.tsx';
import useDeletePet from '../../services/api/v1/pets/useDeletePet';
import PetEditCard from '../../components/PetEditCard';
import SaveIcon from '@mui/icons-material/Save';
import { useForm } from 'react-hook-form';
import { useUpdatePet } from '../../services/api/v1/pets/useUpdatePet';

export default function EditPetForm() {
    const params = useParams();
    const router = useRouter();
    const [editMode, setEditMode] = useState(false);
    const [openDialog, setOpenDialog] = useState(false);
    const form = useForm<IPetDetail>();
    const petParams: IPetQueryParams = {
        petId: params?.petId as string,
    };
    const {
        data: petFullDetail,
        isSuccess: petSuccess,
        isError: petError,
        refetch,
        isRefetching: refetchingEditPage,
    } = useGetPetByID(petParams);

    const deletePet = useDeletePet({
        onSuccess: () => {
            router.push('/user/my-shop');
        },
    });

    const handleDelete = () => {
        deletePet.mutate(petParams);
    };

    const { mutateAsync: mutateUpdatePet } = useUpdatePet({
        onSuccess: () => {
            refetch();
        },
    });

    const handleSubmitEdit = async (data: IPetDetail) => {
        const updateData = {
            ...petFullDetail,
            ...data,
        };
        try {
            await mutateUpdatePet({ petId: petParams.petId, payload: updateData } as IPetUpdateParams);
            refetch();
        } catch (err) {
            console.log(err);
        }
    };

    if (!petSuccess || refetchingEditPage) return null;

    return (
        <form onSubmit={form.handleSubmit(handleSubmitEdit)} noValidate>
            <Box sx={{ alignSelf: 'center', marginTop: 5 }}>
                <ConfirmDialog
                    open={openDialog}
                    setOpen={setOpenDialog}
                    header={`Confirm Delete ${petFullDetail?.name} 🥺?`}
                    cancelText="Cancel"
                    confirmText="Delete"
                    handleConfirm={handleDelete}
                />
                <Box sx={{ px: '5%', textAlign: 'end', float: 'inline-end' }}>
                    <Button
                        sx={{ display: editMode ? 'none' : 'flex', backgroundColor: 'whitesmoke', color: 'black' }}
                        onClick={() => {
                            setEditMode(true);
                        }}
                    >
                        {<EditIcon />}
                        <Typography>{`Edit`}</Typography>
                    </Button>
                    <Button
                        type="submit"
                        sx={{
                            display: editMode ? 'flex' : 'none',
                            backgroundColor: 'whitesmoke',
                            color: 'black',
                        }}
                        onClick={() => {
                            setEditMode(false);
                        }}
                    >
                        {<SaveIcon />}
                        <Typography>{`Save`}</Typography>
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
                            <PetEditCard
                                form={form}
                                id={petFullDetail.id}
                                media={petFullDetail.media}
                                seller_id={petFullDetail.seller_id}
                                age={petFullDetail.age}
                                behavior={petFullDetail.behavior}
                                category={petFullDetail.category}
                                description={petFullDetail.description}
                                is_sold={petFullDetail.is_sold}
                                medical_records={petFullDetail.medical_records}
                                name={petFullDetail.name}
                                price={petFullDetail.price}
                                sex={petFullDetail.sex}
                                species={petFullDetail.species}
                                weight={petFullDetail.weight}
                                editMode={editMode}
                            />
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </form>
    );
}
