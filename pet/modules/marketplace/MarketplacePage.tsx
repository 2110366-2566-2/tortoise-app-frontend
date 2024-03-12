'use client';
import { Box, Typography } from '@mui/material';
import PetCatalogue from '../../components/PetCatalogue';
import SearchField from '../../components/SearchField';
import ImageCarousel from '../../components/ImageCarousel';
import { useEffect, useState } from 'react';
import useGetSession from '@core/auth/useGetSession';
import useGetUserProfile from '@services/api/v1/user/useGetUserProfile';
import { IUserDetail } from '@services/api/v1/user/type';
import NewUserDialog from '@components/NewUserDialog';

export default function MarketplacePage() {

    const session = useGetSession();
    const { data: userProfile, isSuccess: userProfileSuccess } = useGetUserProfile(session.userID || '');

    const [openNewUserDialog, setOpenNewUserDialog] = useState(false)

    const required_props = [
        userProfile?.first_name,
        userProfile?.last_name,
        userProfile?.gender,
        userProfile?.phoneNumber,
        userProfile?.address.building,
        userProfile?.address.street,
        userProfile?.address.district,
        userProfile?.address.province,
        userProfile?.address.postalCode
    ]

    const handleNewUserProfile = () => {
        required_props.forEach(element => {
            if(!element || element === '') {
                setOpenNewUserDialog(true)
            }
            console.log(element)
        }); 
    }

    useEffect(() => {
        handleNewUserProfile()
    }, [])

    if (!userProfileSuccess) {
        return null;
    }

    const carouselItems = [
        'https://drive.google.com/uc?id=17CcoKvTnth9Cm2Dm2XNQ3MmB-vNx0Mof',
        'https://drive.google.com/uc?id=1lOfP2KfgcsjKIhLmbcm622MtglHGCYwi',
    ];

    return (
        <Box sx={{ textAlign: '-webkit-center' }}>
            <NewUserDialog
                open={openNewUserDialog}
                setOpen={handleNewUserProfile}
                header={'Are you a new User?'}
                cancelText="Cancel"
                confirmText="Create Profile"
                handleConfirm={handleNewUserProfile}
            />
            {/* <Box sx={{ height: '50vh', p: '24px 10% 8px' }}>
                <ImageCarousel itemLists={carouselItems} />
            </Box> */}

            <Box sx={{ p: '32px 10% 8px' }}>
                <SearchField />
            </Box>
            <Box sx={{ p: '16px 10%' }}>
                <PetCatalogue />
            </Box>
        </Box>
    );
}
