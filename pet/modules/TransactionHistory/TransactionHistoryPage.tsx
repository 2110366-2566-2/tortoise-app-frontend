'use client';

import React from 'react'
import { useEffect, useState } from 'react';
import CenterLoader from '@components/CenterLoader';
import useGetTransactionHistory from '@services/api/v1/user/useGetTransactionHistory';

function TransactionHistoryPage() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const response = await useGetTransactionHistory();
            setData(response.data);
            setLoading(response.loading);
            setError(response.error);
        };
        fetchData();
    }, []);

    if (loading) return <CenterLoader />;
    // if (error) return <Error />;

    return (
        <>

        </>
    )
}

export default TransactionHistoryPage
