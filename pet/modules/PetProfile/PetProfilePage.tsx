'use client';
import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ProfileCard from '../../components/ProfileCard.tsx';
import SettingsCard from '../../components/SettingsCard';
import { Box } from '@mui/material';

const theme = createTheme();

export default function PetProfile() {
    const mainUser = {
        title: 'PetName',
        pfp: '',
        name: 'จุ้บเหม',
        birth: '27.07.2103',
        breed: 'Dog',
        gender: 'female',
        weight: '30',
        characteristics: 'Lazy',
        phone: '932-555-4247',
        email: 'janedoe@gmail.com',
    };

    const fullName = `${mainUser.name} `;

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
                        <ProfileCard name={fullName} sub={mainUser.title} pfp={mainUser.pfp}></ProfileCard>
                    </Grid>

                    <Grid item md={9}>
                        <SettingsCard
                            name={mainUser.name}
                            birth={mainUser.birth}
                            breed={mainUser.breed}
                            gender={mainUser.gender}
                            weight={mainUser.weight}
                            characteristics={mainUser.characteristics}
                            phone={mainUser.phone}
                            email={mainUser.email}
                        ></SettingsCard>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    );
}
