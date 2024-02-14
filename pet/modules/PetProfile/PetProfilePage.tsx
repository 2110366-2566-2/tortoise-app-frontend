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
        <Box sx={{ alignSelf: 'center', marginTop: 5 }}>
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
            <Box sx={{ marginX: 10, marginTop: 3, marginBottom: 5 }}>
                <Box sx={{ height: 'auto', width: 150, paddingX: 3, paddingY: 1, fontSize: 20, backgroundColor: '#472F05', 
                color: 'whitesmoke', border: '2px solid black', borderBottom: 0, borderTopLeftRadius: 5, borderTopRightRadius: 5, 
                boxShadow: '3px 3px black', textAlign: 'center' }}>
                    Description:
                </Box>
                <Box sx={{ width: '100%', paddingX: 3, paddingY: 1, fontSize: 16, backgroundColor: 'whitesmoke', 
                border: '2px solid #472F05', boxShadow: '3px 3px black'}}>
                    {petFullDetail.description.split('\\n').join('\n')}
                </Box>
            </Box>
        </Box>
    );
}
