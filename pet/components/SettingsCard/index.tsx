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
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';
import { Fira_Sans_Condensed } from 'next/font/google';
import { ButtonProps, styled } from '@mui/material';

const fira_sans_600 = Fira_Sans_Condensed({weight: ['600'], subsets: ['latin']})

const theme = createTheme({
    typography: {
        fontFamily: ['Arial', 'sans-serif'].join(','),
    },
});

export default function SettingsCard(props: IPetDetail) {

    const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
        color: theme.palette.getContrastText('#F9C067'),
        '&:hover': {
            backgroundColor: '#F79762',
        },
    }));

    const rows: GridRowsProp = [
        { id: 2, col1: 'Sex:', col2: props.sex },
        { id: 3, col1: 'BirthDate:', col2: props.birth },
        { id: 4, col1: 'Category:', col2: props.category },
        { id: 5, col1: 'Species:', col2: props.species },
        { id: 6, col1: 'Behavior:',   col2: props.behavior },
    ];
      
    const columns: GridColDef[] = [
        { field: 'col1', headerName: 'Column 1', width: 150 },
        { field: 'col2', headerName: 'Column 2', width: 250 },
    ];

    return (

        <Box sx={{ height: 'auto', width: 'auto', margin: 1 }}>
            <Box sx={{boxShadow: '6px 6px #472F05'}}>
                <Box sx={{ height: 'auto', paddingLeft: 3, paddingY: 1, fontSize: 30, backgroundColor: '#F9C067', 
                border: '2px solid #472F05'}}>
                    {props.name}
                </Box>
                <DataGrid rows={rows} columns={columns} hideFooter={true} columnHeaderHeight={0} rowHeight={45}
                sx={{border: '2px solid #472F05', borderRadius: 0, fontFamily: fira_sans_600.style.fontFamily, fontSize: 18, 
                '& .MuiDataGrid-cell': {
                    paddingLeft: 3,
                }}} />
            </Box>
            <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', marginTop: 4, fontSize: 25}}>
                <Box sx={{paddingRight: 3, paddingTop: 1, marginLeft: 3, position: 'initial', left: 0}}>Price: ฿{props.price}</Box>
                <Box sx={{width: 'auto', height: 'auto', backgroundColor: '#FAA943',
                boxShadow: '2px 2px #472F05' }}>
                    <ColorButton sx={{paddingX: 2, paddingTop: 1, fontFamily: fira_sans_600.style.fontFamily, fontSize: 18, 
                    borderRadius: 0, border: '2px solid #472F05', ':&hover': {border: '3px solid #472F05'}}}>Buy Now!</ColorButton>
                </Box>
            </Box>
        </Box>
        
        // <Card variant="outlined" sx={{ height: 'auto', width: '100%', overflowY: 'scroll' }}>
        //     <Tabs
        //         value="one"
        //         textColor="secondary"
        //         indicatorColor="secondary"
        //         style={{ backgroundColor: '#F9C067' }}
        //     >
        //         <Tab value="one" label="Pet Information" />
        //     </Tabs>
        //     <Divider />
        //     <CardContent
        //         sx={{
        //             p: 3,
        //             maxHeight: { md: '100vh' },
        //             textAlign: { xs: 'center', md: 'start' },
        //         }}
        //     >
        //         <FormControl fullWidth>
        //             <Grid container direction={{ xs: 'column', md: 'row' }} columnSpacing={5} rowSpacing={3}>
        //                 <Grid component="form" item xs={6}>
        //                     <Box>
        //                         <label htmlFor="name" style={{ fontSize: 'normal' }}>
        //                             Name : {props.name}
        //                         </label>
        //                     </Box>
        //                 </Grid>
        //                 <Grid component="form" item xs={6}>
        //                     <Box>
        //                         <label htmlFor="age" style={{ fontSize: 'normal' }}>
        //                             Age: {props.age}
        //                         </label>
        //                     </Box>
        //                 </Grid>
        //                 <Grid component="form" item xs={6}>
        //                     <Box>
        //                         <label htmlFor="price" style={{ fontSize: 'normal' }}>
        //                             Price: {props.price}
        //                         </label>
        //                     </Box>
        //                 </Grid>
        //                 <Grid component="form" item xs={6}>
        //                     <Box>
        //                         <label htmlFor="is_sold" style={{ fontSize: 'normal' }}>
        //                             Sold: {props.is_sold ? 'Yes' : 'No'}
        //                         </label>
        //                     </Box>
        //                 </Grid>
        //                 <Grid component="form" item xs={6}>
        //                     <Box>
        //                         <label htmlFor="description" style={{ fontSize: 'normal' }}>
        //                             Description: {props.description}
        //                         </label>
        //                     </Box>
        //                 </Grid>
        //                 <Grid component="form" item xs={6}>
        //                     <Box>
        //                         <label htmlFor="weight" style={{ fontSize: 'normal' }}>
        //                             Weight: {props.weight}
        //                         </label>
        //                     </Box>
        //                 </Grid>
        //                 <Grid component="form" item xs={6}>
        //                     <Box>
        //                         <label htmlFor="sex" style={{ fontSize: 'normal' }}>
        //                             Sex: {props.sex}
        //                         </label>
        //                     </Box>
        //                 </Grid>
        //                 <Grid component="form" item xs={6}>
        //                     <Box>
        //                         <label htmlFor="species" style={{ fontSize: 'normal' }}>
        //                             Species: {props.species}
        //                         </label>
        //                     </Box>
        //                 </Grid>
        //                 <Grid component="form" item xs={6}>
        //                     <Box>
        //                         <label htmlFor="type" style={{ fontSize: 'normal' }}>
        //                             Type: {props.category}
        //                         </label>
        //                     </Box>
        //                 </Grid>
        //                 <Grid component="form" item xs={6}>
        //                     <Box>
        //                         <label htmlFor="behavior" style={{ fontSize: 'normal' }}>
        //                             Behavior: {props.behavior}
        //                         </label>
        //                     </Box>
        //                 </Grid>
        //             </Grid>
        //         </FormControl>

        //         {/* Medical Records */}
        //         <Typography variant="body1" gutterBottom style={{ marginTop: '20px', fontWeight: 'bold' }}>
        //             Medical Records:
        //         </Typography>
        //         {/* {props.medical_record ? ( */}
        //         {false ? (
        //             props.medical_records.map((record, index) => (
        //                 <Paper key={index} sx={{ p: 2, marginBottom: 2 }}>
        //                     <Typography variant="body1" gutterBottom>
        //                         Medical ID: {record.medical_id}
        //                     </Typography>
        //                     <Typography variant="body1" gutterBottom>
        //                         Date: {record.medical_date}
        //                     </Typography>
        //                     <Typography variant="body1">Description: {record.description}</Typography>
        //                 </Paper>
        //             ))
        //         ) : (
        //             <Typography>No Medical Record</Typography>
        //         )}
        //     </CardContent>
        // </Card>

            
    );
}
