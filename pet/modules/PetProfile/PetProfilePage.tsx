'use client';
import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ProfileCard from '../../components/ProfileCard.tsx';
import SettingsCard from '../../components/SettingsCard';
import { Box } from '@mui/material';
import useGetPetByID from '../../services/api/v1/pets/useGetPetByID.js';
import { useParams } from 'next/navigation.js';
import { IPetQueryParams } from '../../services/api/v1/pets/type.js';
import dayjs from 'dayjs';

export default function PetProfile() {
    const params = useParams();
    const petParams: IPetQueryParams = {
        petId: params?.petId as string,
    };
    const { data: petFullDetail, isSuccess: petSuccess, isError: petError } = useGetPetByID(petParams);

    if (!petSuccess) return null;

    return (
        <Box>
            <Grid container direction="column" sx={{ overflowX: 'hidden' }}>
                <Grid
                    container
                    direction={{ xs: 'column', md: 'row' }}
                    spacing={3}
                    sx={{
                        position: 'absolute',
                        top: '20vh',
                        px: { xs: 0, md: 7 },
                    }}
                >
                    <Grid item md={3}>
                        <ProfileCard
                            name={petFullDetail.name}
                            sub={petFullDetail.description}
                            pfp={petFullDetail.media}
                        ></ProfileCard>
                    </Grid>

                    <Grid item md={9}>
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
                            medical_record={petFullDetail.medical_record}
                            name={petFullDetail.name}
                            price={petFullDetail.price}
                            sex={petFullDetail.sex}
                            species={petFullDetail.species}
                            weight={petFullDetail.weight}
                        />
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    );
}
