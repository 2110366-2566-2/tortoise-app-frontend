'use client';

import React from 'react'
import { useEffect, useState } from 'react';
import CenterLoader from '@components/CenterLoader';
import Transaction from '@components/Transaction/index';
import { Typography, Grid } from '@mui/material';
import useGetTransactionHistory from '@services/api/v1/user/useGetTransactionHistory';
import { set } from 'react-hook-form';

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
            <Typography variant="h5" sx={{ textAlign: 'center', fontWeight: 800, p: '32px 10% 15px' }}>
                Transaction History
            </Typography>
            <Typography variant="subtitle1" sx={{ textAlign: 'center', fontWeight: 500, p: '8px 10% 70px', color: '#808080'}}>
                From fluff to funds: Tracking your pet-ty transactions! 🐾💰
            </Typography>
            <Grid
                container
                justifyContent='center'
                alignItems='center'
                columns={{xs: 13}}
                spacing={{xs: 1}}
            >
                <Grid item xs={3}>
                    <Typography variant='subtitle1' sx={{fontWeight: 800, p: '0px 10% 0px', color: '#8b94aa'}}>
                        DATE & TIME
                    </Typography>
                </Grid>
                <Grid item xs={3}>
                    <Typography variant='subtitle1' sx={{fontWeight: 800, p: '0px 10% 0px', color: '#8b94aa'}}>
                        TYPE
                    </Typography>
                </Grid>
                <Grid item xs={2}>
                    <Typography variant='subtitle1' sx={{fontWeight: 800, p: '0px 10% 0px', color: '#8b94aa'}}>
                        STATUS
                    </Typography>
                </Grid>
                <Grid item xs={3}>
                    <Typography variant='subtitle1' sx={{fontWeight: 800, p: '0px 10% 0px', color: '#8b94aa'}}>
                        AMOUNT
                    </Typography>
                </Grid>
                <Grid item xs={1}>
                </Grid>
                {data.map((transaction, index) => (
                    <Grid item xs={12} key={index}>
                        <Transaction role={role} transaction={transaction} />
                    </Grid>
                ))}
            </Grid>
        </>
    )
}

export default TransactionHistoryPage
