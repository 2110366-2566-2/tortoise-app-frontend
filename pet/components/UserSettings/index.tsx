'use client';

import { Box, Typography, Stack, Card, Divider, FormLabel, FormControl, Avatar } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Fira_Sans_Condensed } from 'next/font/google';

const fira_sans_600 = Fira_Sans_Condensed({ weight: ['600'], subsets: ['latin'] });

const theme = createTheme({
    typography: {
        fontFamily: ['Arial', 'sans-serif'].join(','),
    },
});
export interface IUserDetail {
    _id: any;
    username: string;
    first_name: string;
    last_name: string;
    gender: string;
    phoneNumber: string;
    image: string;
    address: Address[];
}

export interface Address {
    district: string;
    subdistrict: string;
    street: string;
    building: string;
    houseNumber: string;
    province: string;
    postalCode: string;
}

export default function UserSettingsCard(props: IUserDetail) {
    
    const sxFormLabel = {fontFamily: fira_sans_600.style.fontFamily, fontSize: 20, color: '#472F05'}
    const sxTypography = {fontFamily: fira_sans_600.style.fontFamily, fontSize: 18, paddingLeft: 3, color: 'rgb(72,52,24)'}

    return (
        <Box
            sx={{
                py: 3,
                width: '100%',
                display: 'block',
                position: 'relative',
            }}
        >
            <Card
                sx={{ border: '2px solid black', borderRadius: 0, boxShadow: '5px 4px #472F05', backgroundColor: '#F3DDD1', py: '8px' }}
            >
                <Box sx={{ mb: 1, paddingLeft: 3, paddingY: 1 }}>
                    <Typography sx={{ overflow: 'hidden', textWrap: 'nowrap', fontFamily: fira_sans_600.style.fontFamily,
                    fontSize: 22 }}>
                        User Information
                    </Typography>
                </Box>
                <Divider />
                <Stack direction="row" spacing={5} sx={{ display: 'flex', alignItems: 'center', my: 2, mx: 4 }}>
                    <Stack spacing={2.5} sx={{ flexGrow: 1 }}>
                        <Stack spacing={0} sx={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                            <FormLabel sx={sxFormLabel}>Name:</FormLabel>
                            <FormControl sx={{ display: { sm: 'flex-column', md: 'flex-row' }, gap: 2 }}>
                                <Typography sx={sxTypography}>{props.first_name} {props.last_name}</Typography>
                            </FormControl>
                        </Stack>
                        <Stack direction="row" spacing={10}>
                            <FormControl sx={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                                <FormLabel sx={sxFormLabel}>Gender:</FormLabel>
                                <Typography sx={sxTypography}>{props.gender}</Typography>
                            </FormControl>
                        </Stack>
                        <div>
                            <FormControl sx={{ display: 'flex' , flexDirection: 'row', alignItems: 'center'  }}>
                                <FormLabel sx={sxFormLabel}>Timezone:</FormLabel>
                                <Typography sx={sxTypography}>INDOCHINA</Typography>
                            </FormControl>
                        </div>
                    </Stack>
                </Stack>
            </Card>
        </Box>
    );
}
