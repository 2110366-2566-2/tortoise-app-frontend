'use client';

import React from 'react';
import { useEffect, useState } from 'react';
import CenterLoader from '@components/core/CenterLoader';
import TransactionFilter from '@components/payment/TransactionFilter';
import Transaction from '@components/payment/Transaction/index';
import { Typography, Grid, ThemeProvider, Box } from '@mui/material';
import useGetTransactionHistory from '@services/api/v1/transaction/useGetTransactionHistory';
import Image from 'next/image';
import dogSleep from '@public/image/dogSleep.png';
import transactionTheme from '@core/theme/transactionTheme';
import { set } from 'react-hook-form';

function TransactionHistoryPage() {
    const [data, setData] = useState([]);
    const [filterData, setFilterData] = useState([]);
    const [role, setRole] = useState(0);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const { theme } = transactionTheme;

    useEffect(() => {
        const fetchData = async () => {
            const response: any = await useGetTransactionHistory();
            if (!response.data) {
                setLoading(response.loading);
                setError(response.error);
                return;
            }

            const formattedData = response.data.map((transaction: any) => {
                const ts = new Date(transaction.timestamp);

                const year = ts.getFullYear();
                const month = ts.getMonth() + 1; // Months are zero-indexed
                const day = ts.getDate();

                const hours = ts.getHours();
                var minutes = ts.getMinutes().toString();
                if (minutes.length === 1) {
                    minutes = '0' + minutes;
                }

                transaction.date = `${year}-${month}-${day}`;
                transaction.time = `${hours}:${minutes}`;

                if (transaction.pet_detail.sex.toLowerCase() === 'm') {
                    transaction.pet_detail.sex = 'Male';
                } else if (transaction.pet_detail.sex.toLowerCase() === 'f') {
                    transaction.pet_detail.sex = 'Female';
                }

                if (transaction.payment_method.toLowerCase() === 'promptpay') {
                    transaction.payment_method = 'PROMPT PAY';
                } else if (transaction.payment_method.toLowerCase() === 'creditcard') {
                    transaction.payment_method = 'CREDIT CARD';
                }
                if (response.role === 'seller') {
                    setRole(1);
                    return {
                        ...transaction,
                        price: '+' + transaction.price.toLocaleString() + ' THB',
                    };
                } else if (response.role === 'buyer') {
                    setRole(2);
                    return {
                        ...transaction,
                        price: '-' + transaction.price.toLocaleString() + ' THB',
                    };
                }
            });
            setData(formattedData);
            setFilterData(formattedData);
            setLoading(response.loading);
            setError(response.error);
        };
        fetchData();
    }, []);

    const filter = (filterQuery: any) => {
        console.log(filterQuery);
        let filteredData = data;
        if (filterQuery.startDate) {
            filteredData = filteredData.filter((transaction: any) => {
                return new Date(transaction.timestamp) >= new Date(filterQuery.startDate);
            });
        }
        if (filterQuery.endDate) {
            filteredData = filteredData.filter((transaction: any) => {
                return new Date(transaction.timestamp) <= new Date(filterQuery.endDate);
            });
        }
        if (filterQuery.paymentMethod) {
            filteredData = filteredData.filter((transaction: any) => {
                return transaction.payment_method.toLowerCase() === filterQuery.paymentMethod.toLowerCase();
            });
        }
        if (filterQuery.status) {
            filteredData = filteredData.filter((transaction: any) => {
                return transaction.status.toLowerCase() === filterQuery.status.toLowerCase();
            });
        }
        setFilterData(filteredData);
    }

    if (loading) return <CenterLoader />;
    if (error) return <></>;

    return (
        <Box
            mx={10}
            my={5}
        >
            <ThemeProvider theme={theme}>
                <style>
                    {`
                body {
                    min-width: 1400px;
                }
                `}
                </style>
                <Box 
                    display="flex" 
                    alignItems="center" 
                    justifyContent="space-between" 
                    width="100%"
                    border={'2px solid #472F05'}
                    borderRadius={1}
                    boxShadow={'4px 4px #472F05'}
                    sx={{
                        backgroundColor: '#FCCD7A'
                    }}
                >
                    <Box flex="1">
                        <Typography
                            variant="h4"
                            sx={{
                                textAlign: 'left',
                                fontWeight: 800,
                                p: '32px 10% 15px',
                                paddingLeft: '25%',
                                paddingTop: '10vh',
                            }}
                        >
                            Transaction History
                        </Typography>
                        <Typography
                            variant='subtitle1'
                            sx={{
                                textAlign: 'left',
                                fontWeight: 500,
                                p: '8px 10% 70px',
                                color: '#684301',
                                paddingLeft: '25%',
                            }}
                        >
                            From fluff to funds: Tracking your pet-ty transactions! 🐾💰
                        </Typography>
                    </Box>
                    <Box flex="1" display="flex" justifyContent="center">
                        <Image
                            width={300}
                            height={300}
                            src={dogSleep}
                            alt="Pet Picture"
                            style={{
                                objectFit: 'cover',
                                height: '100%',
                                maxHeight: 'fit-content',
                                marginLeft: '20%',
                                marginTop: '-5vh',
                            }}
                        />
                    </Box>
                </Box>
                <Box
                    sx={{
                        border: '2px solid #472F05',
                        borderRadius: 1,
                        boxShadow: '4px 4px #472F05',
                        backgroundColor: '#FEEED2',
                        my: 2,
                        pb: 5,
                    }}
                >
                    <TransactionFilter data={data} filter={filter}/>        
                    {filterData.length > 0 && (
                        <Grid container justifyContent="center" alignItems="center" columns={{ xs: 12 }} spacing={{ xs: 1 }}>
                            <Grid item xs={2.12}>
                                <Typography variant="subtitle1" sx={{ fontWeight: 800, p: '0px 10% 0px', color: '#8b94aa' }}>
                                    DATE & TIME
                                </Typography>
                            </Grid>
                            <Grid item xs={2.23}>
                                <Typography variant="subtitle1" sx={{ fontWeight: 800, p: '0px 10% 0px', color: '#8b94aa' }}>
                                    TYPE
                                </Typography>
                            </Grid>
                            <Grid item xs={1.38}>
                                <Typography variant="subtitle1" sx={{ fontWeight: 800, p: '0px 10% 0px', color: '#8b94aa' }}>
                                    STATUS
                                </Typography>
                            </Grid>
                            <Grid item xs={2.12}>
                                <Typography variant="subtitle1" sx={{ fontWeight: 800, p: '0px 10% 0px', color: '#8b94aa' }}>
                                    AMOUNT
                                </Typography>
                            </Grid>
                            <Grid item xs={1.18}></Grid>
                            {filterData.map((transaction, index) => (
                                <Grid item xs={9} key={index}>
                                    <Transaction role={role} transaction={transaction} />
                                </Grid>
                            ))}
                        </Grid>
                    )}
                </Box>
            </ThemeProvider>
        </Box>
    );
}

export default TransactionHistoryPage;
