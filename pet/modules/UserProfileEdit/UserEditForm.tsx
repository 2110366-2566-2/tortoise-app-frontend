'use client';
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Button } from '@mui/material';
import { useRouter } from 'next/navigation';
import UserProfileCard from '../../components/UserProfileCard';
import EditUserSettings from '../../components/UserProfileEdit';
import { IUserDetail } from '../../components/UserSettings';

export default function UpdateProfilePage() {
    const [hover, setHover] = useState(false);
    function onMouseAction(event: React.SyntheticEvent) {
        if (event.type == 'mouseover') {
            setHover(true);
        } else {
            setHover(false);
        }
    }

    const mockUserDetail: IUserDetail = {
        _id: '123456789', // example ID
        first_name: 'John',
        last_name: 'Doe',
        gender: 'Male',
        phoneNumber: '123-456-7890',
        image: '',
        address: [
            {
                district: 'District',
                subdistrict: 'Subdistrict',
                street: 'Streetะะะะะะะะะะะะะะะะะะะะะะะะะะะะ',
                building: ' Building',
                houseNumber: '123',
                province: 'Province',
                postalCode: '12345',
            },
        ],
    };

    const handleUpdate = (updatedData: IUserDetail) => {
        console.log('Updated data:', updatedData);
        return updatedData;
    };

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
                        top: '15vh',
                        px: { xs: 5, md: 8 },
                    }}
                >
                    <Grid item md={4} sx={{ alignSelf: 'center' }}>
                        <UserProfileCard image={mockUserDetail.image} />
                    </Grid>

                    <Grid item md={7}>
                        <EditUserSettings
                            _id={mockUserDetail._id}
                            first_name={mockUserDetail.first_name}
                            last_name={mockUserDetail.last_name}
                            gender={mockUserDetail.gender}
                            phoneNumber={mockUserDetail.phoneNumber}
                            address={mockUserDetail.address}
                            onUpdate={() => {}}
                        />
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    );
}
