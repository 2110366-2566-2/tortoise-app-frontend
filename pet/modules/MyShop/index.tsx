'use client';
// IMPORTS

import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CatalogueBySeller from '../../components/CatalogueBySeller';
import ProfileCard from '../../components/ProfileCard.tsx';
import SellerShopBriefCard from '../../components/SellerShopBriefCard';
import { Box } from '@mui/material';

// STYLE & THEME
const theme = createTheme();

// APP
export default function SellerShopPage() {
    const mainUser = {
        // DEFAULT VALUES
        title: 'Seller', // Don't Modify this title
        pfp: 'https://media.glamour.com/photos/5a425fd3b6bcee68da9f86f8/master/pass/best-face-oil.png',
        name: 'Khunnnnn',
    };

    const fullName = `${mainUser.name} `;

    return (
        <Box sx={{ py: '16px' }}>
            <Grid container direction="column" sx={{ overflowX: 'hidden' }}>
                <SellerShopBriefCard media={mainUser.pfp} />

                <Box sx={{ p: '16px 10%' }}>
                    <CatalogueBySeller sellerName={mainUser.name} />
                </Box>
            </Grid>
        </Box>
    );
}
