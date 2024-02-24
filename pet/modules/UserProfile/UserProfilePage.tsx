'use client';
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Avatar, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';
import UserSettingsCard, { IUserDetail } from '../../components/UserSettings';
import { fira_sans_800 } from '../../core/theme/theme';
import AccountOptionList from '../../components/AccountOptionList';

export default function UserProfilePage() {

    const mockUserDetail: IUserDetail = {
        _id: '123456789', // example ID
        username: 'ruthlessYeddo',
        first_name: 'Rutthee',
        last_name: 'SudtreenloeyPree',

        gender: 'Male',
        phoneNumber: '123-456-7890',
        image: 'https://drive.google.com/uc?id=1xI9x6kY2nBrd16MQhqLX9mG1e1XIDOLt',
        address: [
            { 
                houseNumber: '123',
                building: ' Building',
                street: 'Street',
                district: 'District',
                subdistrict: 'Subdistrict',
                province: 'Province',
                postalCode: '12345',
            },
        ],
    };

    return (
        <Box sx={{ alignSelf: 'center', mt: 5 }}>

            <Grid container direction="column" sx={{ overflowX: 'hidden', flexWrap: 'nowrap' }}>
                <Grid
                    container
                    direction={ { xs: 'column', md: 'row' } }
                    spacing={{xs: 0, md: 10}}
                    sx={{
                        display: 'flex',
                        flexWrap: 'nowrap',
                        top: '15vh',
                        px: { xs: 7, md: 12 },
                        pt: 0
                    }}
                >
                    <Grid item md={4} sx={{ alignSelf: 'normal', justifySelf: 'center', mt: 3}}>
                        <Box display={'flex'} flexDirection={'column'} alignItems={'center'} pb={3} >
                            <Box 
                                display={'flex'} 
                                flexDirection={'column'} 
                                alignItems={'center'} 
                                py={3}
                                px={4}
                                border={'3px solid #472F05'}
                                boxShadow={'6px 6px #472F05'}
                                borderRadius={0}
                                sx={{
                                    backgroundColor: '#E5CB9A'
                                }}
                            >
                                <Avatar 
                                    alt='Profile Picture'
                                    src={mockUserDetail.image}
                                    sx={{ 
                                        width: 180 , height: 180,  
                                        border: '2px solid #472F05', 
                                        boxShadow: 10,
                                        fontSize: 70,
                                        fontFamily: fira_sans_800.style.fontFamily
                                    }} 
                                >
                                    {mockUserDetail.username[0].toUpperCase()}
                                </Avatar>
                                <Typography variant='h5' fontFamily={fira_sans_800.style.fontFamily} color={'#472F05'} pt={5}>
                                    {mockUserDetail.username}
                                </Typography>
                            </Box>
                            
                            <AccountOptionList />

                        </Box>
                    </Grid>

                    <Grid item md={7.5} sx={{ width: '100%', alignSelf: 'normal', right: 0}}>
                        <UserSettingsCard
                            _id={mockUserDetail._id}
                            username={mockUserDetail.username}
                            first_name={mockUserDetail.first_name}
                            last_name={mockUserDetail.last_name}
                            gender={mockUserDetail.gender}
                            phoneNumber={mockUserDetail.phoneNumber}
                            address={mockUserDetail.address}
                            image={mockUserDetail.image}
                        />
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    );
}
