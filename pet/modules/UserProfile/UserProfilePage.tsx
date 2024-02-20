'use client';
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Button } from '@mui/material';
import { useParams, useRouter } from 'next/navigation';
import UserProfileCard from '../../components/UserProfileCard';
import UserSettingsCard, { IUserDetail } from '../../components/UserSettings';

export default function UserProfilePage() {
    const router = useRouter();
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
                    <Grid item md={4} sx={{ alignSelf: 'center' }}>
                        <UserProfileCard image={mockUserDetail.image} />
                        <button
                            className="button"
                            style={
                                hover
                                    ? {
                                          border: '2px solid black',
                                          boxShadow: '5px 4px #472F05',
                                          backgroundColor: '#F79762',
                                          cursor: 'pointer',
                                      }
                                    : {
                                          border: '2px solid black',
                                          boxShadow: '5px 4px #472F05',
                                          backgroundColor: '#F3DDD1',
                                          cursor: 'default',
                                      }
                            }
                            onMouseOver={(event) => onMouseAction(event)}
                            onMouseOut={(event) => onMouseAction(event)}
                            onClick={() => router.push(`?edit=${true}`)}
                        >
                            <p>🖊️EditProfile</p>
                        </button>
                    </Grid>

                    <Grid item md={7}>
                        <UserSettingsCard
                            _id={mockUserDetail._id}
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
