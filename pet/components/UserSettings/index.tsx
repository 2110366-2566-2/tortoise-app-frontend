'use client';

import { Box, Typography, Stack, Card, Divider, FormLabel, FormControl, Avatar } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { fira_sans_800, fira_sans_600 } from '../../core/theme/theme';
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';


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
    houseNumber: string,
    building: string,
    street: string,
    district: string,
    subdistrict: string,
    province: string,
    postalCode: string,
}

export default function UserSettingsCard(props: IUserDetail) {
    
    const sxFormLabel = {fontFamily: fira_sans_800.style.fontFamily, fontSize: 20, color: '#472F05', py: 0.5}
    const sxTypography = {fontFamily: fira_sans_600.style.fontFamily, fontSize: 18, paddingLeft: 3, color: 'rgb(72,52,24)'}

    const rows: GridRowsProp = [
        { id: 1, col1: 'House Number:', col2: props.address[0].houseNumber + " " + props.address[0].building},
        // { id: 2, col1: 'Building:', col2: props.address[0].building},
        { id: 3, col1: 'Street:', col2:props.address[0].street },
        { id: 4, col1: 'Sub-District:', col2: props.address[0].subdistrict },
        { id: 5, col1: 'District:', col2: props.address[0].district },
        { id: 6, col1: 'Province:', col2: props.address[0].province},
        { id: 7, col1: 'Postal Code:',   col2: props.address[0].postalCode },
    ];

    const columns: GridColDef[] = [
        { field: 'col1', headerName: 'Column 1', width: 200 },
        { field: 'col2', headerName: 'Column 2', width: 300 },
    ];


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

                sx={{ 
                    border: '2px solid black', 
                    borderRadius: 1, 
                    boxShadow: '10px 10px #472F05', 
                    backgroundColor: '#F3DDD1', 
                    py: '8px' 
                }}
            >
                <Box sx={{ mb: 1, paddingLeft: 3, paddingY: 1 }}>
                    <Typography sx={{ overflow: 'hidden', textWrap: 'nowrap', fontFamily: fira_sans_800.style.fontFamily,
                    fontSize: 25, color: '#472F05' }}>
                        User Information
                    </Typography>
                </Box>

                <Divider />

                <Stack 
                    direction="row" 
                    spacing={5} 
                    sx={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        my: 2, mx: 4 
                    }}
                >
                    <Stack spacing={2.5} sx={{ flexGrow: 1 }}>

                        <Stack 
                            spacing={0} 
                            sx={{
                                display: 'flex', 
                                flexDirection: 'row', 
                                alignItems: 'center'
                            }}
                        >
                            <FormLabel sx={sxFormLabel}> 
                                Name: 
                            </FormLabel>
                            <FormControl sx={{ display: { sm: 'flex-column', md: 'flex-row' }, gap: 2 }}>
                                <Typography sx={sxTypography}>
                                    {props.first_name} {props.last_name}
                                </Typography>
                            </FormControl>
                        </Stack>

                        <Stack 
                            spacing={0} 
                            sx={{
                                display: 'flex', 
                                flexDirection: 'row', 
                                alignItems: 'center'
                            }}
                        >
                            <FormLabel sx={sxFormLabel}> 
                                Gender: 
                            </FormLabel>
                            <FormControl sx={{ display: { sm: 'flex-column', md: 'flex-row' }, gap: 2 }}>
                                <Typography sx={sxTypography}>
                                    {props.gender}
                                </Typography>
                            </FormControl>
                        </Stack>

                        <Stack 
                            spacing={0} 
                            sx={{
                                display: 'flex', 
                                flexDirection: 'row', 
                                alignItems: 'center'
                            }}
                        >
                            <FormLabel sx={sxFormLabel}> 
                                Tel: 
                            </FormLabel>
                            <FormControl sx={{ display: { sm: 'flex-column', md: 'flex-row' }, gap: 2 }}>
                                <Typography sx={sxTypography}>
                                    {props.phoneNumber}
                                </Typography>
                            </FormControl>
                        </Stack>

                        <Box>
                             <Stack 
                                spacing={0}
                                sx={{
                                    display: 'flex', 
                                    flexDirection: 'column', 
                                    alignItems: 'start',
                                }}
                            >
                                <FormLabel sx={sxFormLabel}> 
                                    Address: 
                                </FormLabel>
                                <DataGrid
                                    rows={rows}
                                    columns={columns}
                                    hideFooter={true}
                                    columnHeaderHeight={0}
                                    rowHeight={45}
                                    sx={{
                                        mx: 3,
                                        width: '90%',
                                        border: '5px double #472F05',
                                        borderRadius: 0,
                                        boxShadow: '3px 3px #472F05',
                                        fontFamily: fira_sans_600.style.fontFamily,
                                        fontSize: 18,
                                        color: '#472F05',
                                        '& .MuiDataGrid-cell': {
                                            paddingLeft: 3,
                                        },
                                    }}
                                />
                            </Stack>
                        </Box>
                       
                       
                    </Stack>
                </Stack>
            </Card>
        </Box>
    );
}
