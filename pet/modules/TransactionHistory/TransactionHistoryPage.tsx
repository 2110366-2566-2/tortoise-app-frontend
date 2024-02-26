'use client';

import React from 'react'
import { useEffect, useState } from 'react';
import CenterLoader from '@components/CenterLoader';
import TransactionFilter from '@components/TransactionFilter';
import Transaction from '@components/Transaction/index';
import { Typography, Grid, createTheme, ThemeProvider, Box } from '@mui/material';
import useGetTransactionHistory from '@services/api/v1/user/useGetTransactionHistory';
import Image from 'next/image';
import dogSleep from '@public/image/dogSleep.png';
import { set } from 'react-hook-form';

import { Fira_Sans_Condensed } from 'next/font/google';

const fira_sans_condensed = Fira_Sans_Condensed({ weight: ['600'], subsets: ['latin'] });

const theme = createTheme({
    typography: {
        fontFamily: fira_sans_condensed.style.fontFamily,
    },
});

function TransactionHistoryPage() {
    const [data, setData] = useState([]);
    const [role, setRole] = useState(1);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            // Mock API call
            const response : any = await useGetTransactionHistory();
            const formattedData = response.data.map((transaction: any) => {
                if (transaction.payment_method.toLowerCase() === 'paypal') {
                    transaction.payment_method = 'PAYPAL';
                } else if (transaction.payment_method.toLowerCase() === 'creditcard') {
                    transaction.payment_method = 'CREDIT CARD';
                }
                if (role === 1) {
                    return {
                        ...transaction,
                        price: '+' + transaction.price.toLocaleString() + ' THB'
                    }
                } else if (role === 2) {
                    return {
                        ...transaction,
                        price: '-' + transaction.price.toLocaleString() + ' THB'
                    }
                }
            });
            setData(formattedData);
            setRole(response.role);
            setLoading(response.loading);
            setError(response.error);
        };
        fetchData();
    }, [data]);

    if (loading) return <CenterLoader />;
    // Never have error ;)
    // if (error) return <Error />;

    return (
        <>
            <ThemeProvider theme={theme}>
            <style>
                {`
                body {
                    min-width: 1400px;
                }
                `}
            </style>
            <Box display="flex" alignItems="center" justifyContent="space-between" width={1650}>
                <Box width={1000}>
                    <Typography variant="h4" sx={{ textAlign: 'left', fontWeight: 800, p: '32px 10% 15px', paddingLeft: '230px', paddingTop: '90px'}}>
                        Transaction History
                    </Typography>
                    <Typography variant="subtitle1" sx={{ textAlign: 'left', fontWeight: 500, p: '8px 10% 70px', color: '#808080', paddingLeft: '230px'}}>
                        From fluff to funds: Tracking your pet-ty transactions! 🐾💰
                    </Typography>
                </Box>
                <Box>
                    <Image width={220} height={220}
                        src={dogSleep}
                        alt="Pet Picture"
                        style={{ objectFit: 'cover', height: '100%', maxHeight: 'fit-content' }}
                    />
                </Box>
            </Box>
            <TransactionFilter />
            <Grid
                container
                justifyContent='center'
                alignItems='center'
                columns={{xs: 12}}
                spacing={{xs: 1}}
            >
                <Grid item xs={2.12}>
                    <Typography variant='subtitle1' sx={{fontWeight: 800, p: '0px 10% 0px', color: '#8b94aa'}}>
                        DATE & TIME
                    </Typography>
                </Grid>
                <Grid item xs={2.23}>
                    <Typography variant='subtitle1' sx={{fontWeight: 800, p: '0px 10% 0px', color: '#8b94aa'}}>
                        TYPE
                    </Typography>
                </Grid>
                <Grid item xs={1.38}>
                    <Typography variant='subtitle1' sx={{fontWeight: 800, p: '0px 10% 0px', color: '#8b94aa'}}>
                        STATUS
                    </Typography>
                </Grid>
                <Grid item xs={2.12}>
                    <Typography variant='subtitle1' sx={{fontWeight: 800, p: '0px 10% 0px', color: '#8b94aa'}}>
                        AMOUNT
                    </Typography>
                </Grid>
                <Grid item xs={1.18}>
                </Grid>
                {data.map((transaction, index) => (
                    <Grid item xs={9} key={index}>
                        <Transaction role={role} transaction={transaction} />
                    </Grid>
                ))}
            </Grid>
            </ThemeProvider>
        </>
    )
}

export default TransactionHistoryPage
