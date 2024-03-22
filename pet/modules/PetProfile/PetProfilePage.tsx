'use client';
import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import SettingsCard from '../../components/pet/SettingsCard';
import SellerProfileCard from '@components/user/SellerProfileCard';
import { Box } from '@mui/material';
import useGetPetByID from '../../services/api/v1/pets/useGetPetByID';
import useGetUserProfile from '@services/api/v1/user/useGetUserProfile';
import { useParams } from 'next/navigation.js';
import { IPetQueryParams } from '../../services/api/v1/pets/type';
import ProfileCard from '@components/pet/ProfileCard';

export default function PetProfile() {
    const params = useParams();
    const petParams: IPetQueryParams = {
        petId: params?.petId as string,
    };

    const { data: petFullDetail, isSuccess: petSuccess, isError: petError } = useGetPetByID(petParams);

    if (!petSuccess) return null;

    return (
        <Box 
            sx={{ 
                alignSelf: 'center', 
                marginTop: 5, 
                mx: 5
            }}
        >
            <Grid container direction="column" sx={{ overflowX: 'hidden', flexWrap: 'nowrap' }}>
                <Grid
                    container
                    direction={{ xs: 'column', md: 'row' }}
                    spacing={8}
                    sx={{
                        display: 'flex',
                        flexWrap: 'nowrap',
                        // position: 'absolute',
                        top: '15vh',
                        px: { xs: 5, md: 8 },
                    }}
                >
                    <Grid item md={5} sx={{ alignSelf: 'normal', justifySelf: 'center' }}>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection :'row',
                                justifyContent: 'center'
                            }}
                        >
                            <ProfileCard petImage={petFullDetail.media} />
                        </Box>
                        <Box
                            sx={{
                                height: 100,
                                border: '2px solid #472F05',
                                borderRadius: 0,
                                boxShadow: '3px 3px #472F05',
                                backgroundColor: '#F3DDD1',
                                my: 3,
                                textAlign: 'center'
                            }}
                        >
                            MultiPicture Tab (Implement Later) 
                        </Box>
                        <SellerProfileCard sellerId={petFullDetail.seller_id} />
                    </Grid>

                    <Grid item md={7}>
                        <SettingsCard
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
                        />
                        <Box sx={{ marginTop: 3, marginBottom: 5 }}>
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
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    );
}
