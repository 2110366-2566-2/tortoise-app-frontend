'use client';

import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import Divider from '@mui/material/Divider';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import { Button, Grid } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Dayjs } from 'dayjs';
import { IPetDetail } from '../../services/api/v1/pets/type';
import { DataGrid, GridRowsProp, GridColDef, GridCellParams } from '@mui/x-data-grid';
import { Fira_Sans_Condensed } from 'next/font/google';
import { ButtonProps, styled } from '@mui/material';
import { useRouter } from 'next/navigation';

const fira_sans_600 = Fira_Sans_Condensed({ weight: ['600'], subsets: ['latin'] });

const theme = createTheme({
    typography: {
        fontFamily: ['Arial', 'sans-serif'].join(','),
    },
});
export interface IUserDetail {
    _id: any;
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
    const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
        color: theme.palette.getContrastText('#F9C067'),
        '&:hover': {
            backgroundColor: '#F79762',
        },
    }));

    const router = useRouter();

    const rows: GridRowsProp = [
        { id: 1, col1: 'FirstName:', col2: props.first_name },
        { id: 2, col1: 'LastName:', col2: props.last_name },
        { id: 3, col1: 'Gender:', col2: props.gender },
        { id: 4, col1: 'PhoneNumber:', col2: props.phoneNumber },
        { id: 5, col1: 'Address:', col2: getAddressString(props.address) },
    ];
    function getAddressString(addresses: Address[]): string {
        // Iterate over each Address object and concatenate its properties
        return addresses
            .map(
                (address) =>
                    `${address.houseNumber}, ${address.street}, ${address.subdistrict}, ${address.district}, ${address.province}, ${address.postalCode}`,
            )
            .join('\n');
    }

    const columns: GridColDef[] = [
        { field: 'col1', headerName: 'Column 1', width: 150 },
        {
            field: 'col2',
            headerName: 'Column 2',
            renderCell: (params: GridCellParams) => <div style={{ whiteSpace: 'pre-wrap' }}>{'Test'}</div>,
        },
    ];

    return (
        <Box sx={{ height: 'auto', width: 'auto', margin: 1 }}>
            <Box sx={{ boxShadow: '6px 6px #472F05' }}>
                <Box
                    sx={{
                        height: 'auto',
                        paddingLeft: 3,
                        paddingY: 1,
                        fontSize: 30,
                        backgroundColor: '#F9C067',
                        border: '2px solid #472F05',
                    }}
                >
                    {'MyProfile'}
                </Box>

                <DataGrid
                    rows={rows}
                    columns={columns}
                    hideFooter={true}
                    columnHeaderHeight={0}
                    rowHeight={45}
                    sx={{
                        border: '2px solid #472F05',
                        borderRadius: 0,
                        fontFamily: fira_sans_600.style.fontFamily,
                        fontSize: 18,
                        '& .MuiDataGrid-cell': {
                            paddingLeft: 3,
                        },
                    }}
                />
            </Box>
        </Box>
    );
}
