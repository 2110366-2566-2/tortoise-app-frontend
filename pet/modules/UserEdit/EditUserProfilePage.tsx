'use client';
import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Button, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';
import useGetSession from '../../core/auth/useGetSession';
import useGetUserProfile from '../../services/api/v1/user/useGetUserProfile';
import { CustomTextField } from '../../components/CustomInput/type';
import UserProfileCard from '../../components/UserProfileCard';
import EditUserSettings from '../../components/UserProfileEdit';
import { Address, IUserDetail } from '../../services/api/v1/user/type';
import { useForm } from 'react-hook-form';
import { fira_sans_600 } from '../../core/theme/theme';

export default function EditUserProfilePage () {

    const session = useGetSession();
    const { data: userProfile, isSuccess: userProfileSuccess } = useGetUserProfile(session.userID || '');

    const form = useForm<IUserDetail>();

    if (!userProfileSuccess) {
        return null;
    }

    // const [hover, setHover] = useState(false);
    // function onMouseAction(event: React.SyntheticEvent) {
    //     if (event.type == 'mouseover') {
    //         setHover(true);
    //     } else {
    //         setHover(false);
    //     }
    // }

    // const userProfile: IUserDetail = {
    //     _id: '123456789', // example ID
    //     first_name: 'John',
    //     last_name: 'Doe',
    //     gender: 'Male',
    //     phoneNumber: '123-456-7890',
    //     image: '',
    //     address: [
    //         {
    //             district: 'District',
    //             subdistrict: 'Subdistrict',
    //             street: 'Streetะะะะะะะะะะะะะะะะะะะะะะะะะะะะ',
    //             building: ' Building',
    //             houseNumber: '123',
    //             province: 'Province',
    //             postalCode: '12345',
    //         },
    //     ],
    // };

    const handleUpdate = (updatedData: IUserDetail) => {
        console.log('Updated data:', updatedData);
        return updatedData;
    };

    useEffect(() => {
        form.setValue('first_name', form.getValues().first_name || userProfile.first_name);
        form.setValue('last_name', form.getValues().last_name || userProfile.last_name);
        form.setValue('phoneNumber', form.getValues().phoneNumber || userProfile.phoneNumber);
        form.setValue('gender', form.getValues().gender || userProfile.gender);
        form.setValue('address.houseNumber', form.getValues().address.houseNumber || userProfile.address.houseNumber);
        // form.setValue('first_name', form.getValues().first_name || userProfile.first_name);
    });

    return (
        <form action="">
            <Box  sx={{ marginTop: 5, mx: 10 }}>
                <Box>
                    Update Image
                </Box>
                <Box>
                    Update your Information
                </Box>
                    <Grid container spacing={4} sx={{mt: 2}}>
                        <Grid item xs={12} md={6}>
                            <CustomTextField
                            {...form.register('first_name')}
                            name={'first_name'}
                            label="First Name"
                            variant="outlined"
                            defaultValue={userProfile.first_name}
                            type={'text'}
                            fullWidth
                            // disabled={}
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <CustomTextField
                            {...form.register('last_name')}
                            name={'last_name'}
                            label="Last Name"
                            variant="outlined"
                            defaultValue={userProfile.last_name}
                            type={'text'}
                            fullWidth
                            // disabled={}
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <CustomTextField
                            {...form.register('gender')}
                            name={'gender'}
                            label="Gender"
                            variant="outlined"
                            defaultValue={userProfile.gender}
                            type={'text'}
                            fullWidth
                            // disabled={}
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <CustomTextField
                            {...form.register('phoneNumber')}
                            name={'phoneNumber'}
                            label="Tel"
                            variant="outlined"
                            defaultValue={userProfile.phoneNumber}
                            type={'text'}
                            fullWidth
                            // disabled={}
                            />
                        </Grid>
                    </Grid>
                <Box>
                    <Typography fontFamily={fira_sans_600.style.fontFamily} py={2}>Address:</Typography>
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={2.5}>
                            <CustomTextField
                                {...form.register('address.houseNumber')}
                                name={'address.houseNumber'}
                                label="House Number"
                                variant="outlined"
                                defaultValue={userProfile.address.houseNumber}
                                type={'text'}
                                fullWidth
                                // disabled={}
                            />
                        </Grid>
                        <Grid item xs={12} md={4.5}>
                            <CustomTextField
                                {...form.register('address.building')}
                                name={'address.building'}
                                label="Building"
                                variant="outlined"
                                defaultValue={userProfile.address.building}
                                type={'text'}
                                fullWidth
                                // disabled={}
                            />
                        </Grid>
                        <Grid item xs={12} md={5}>
                            <CustomTextField
                                {...form.register('address.street')}
                                name={'address.street'}
                                label="Street"
                                variant="outlined"
                                defaultValue={userProfile.address.street}
                                type={'text'}
                                fullWidth
                                // disabled={}
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <CustomTextField
                                {...form.register('address.subdistrict')}
                                name={'address.subdistrict'}
                                label="Sub-District"
                                variant="outlined"
                                defaultValue={userProfile.address.subdistrict}
                                type={'text'}
                                fullWidth
                                // disabled={}
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <CustomTextField
                                {...form.register('address.district')}
                                name={'address.district'}
                                label="District"
                                variant="outlined"
                                defaultValue={userProfile.address.district}
                                type={'text'}
                                fullWidth
                                // disabled={}
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <CustomTextField
                                {...form.register('address.province')}
                                name={'address.province'}
                                label="Province"
                                variant="outlined"
                                defaultValue={userProfile.address.province}
                                type={'text'}
                                fullWidth
                                // disabled={}
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <CustomTextField
                                {...form.register('address.postalCode')}
                                name={'address.postalCode'}
                                label="Postal Code"
                                variant="outlined"
                                defaultValue={userProfile.address.postalCode}
                                type={'text'}
                                fullWidth
                                // disabled={}
                            />
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </form>
    );
}
