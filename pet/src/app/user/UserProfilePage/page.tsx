'use client'
import React from 'react';
import UserProfileCard from '../../../../components/zUserProfileCard';
import UserSettingsCard, { IUserDetail } from '../../../../components/zUserSetting';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Button } from '@mui/material';
import EditButton from '../../../../components/EditButton';
//import SearchField from '../../../../components/SearchField';
import { useRouter } from 'next/navigation';

export default function UserProfilePage() {
    //const router = useRouter();

    const mockUserDetail: IUserDetail = {
    _id: "123456789", // example ID
    first_name: "John",
    last_name: "Doe",
    gender: "Male",
    phoneNumber: "123-456-7890",
    image: "",
    address: [
        {
            district: "District",
            subdistrict: "Subdistrict",
            street: "Streetะะะะะะะะะะะะะะะะะะะะะะะะะะะะ",
            building: " Building",
            houseNumber: "123",
            province: "Province",
            postalCode: "12345"
        }
    ]
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
                        <UserProfileCard 
                            image = {mockUserDetail.image} 
                        />
                        <EditButton 
                        //onClick={() => {
                         //       router.push('/user/login');
                            //}}
                        />
                    </Grid>

                    <Grid item md={7}>
                        <UserSettingsCard
                            first_name={mockUserDetail.first_name}
                            last_name={mockUserDetail.last_name}
                            gender={mockUserDetail.gender}
                            phoneNumber={mockUserDetail.phoneNumber}
                            address={mockUserDetail.address}
                            
                        />
                    </Grid>

                </Grid>
            </Grid>
            
        </Box>
    );   
    

    
}


