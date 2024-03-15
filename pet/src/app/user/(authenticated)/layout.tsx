'use client';
import { getLocalStorageValue } from '@core/utils';
import TopBar from '../../../../components/core/TopBar';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function HomeLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const router = useRouter();

    const sessionCheck = async () => {
        const session_id = await localStorage.getItem('session_id');
        if (!session_id) {
            router.push('/user/login');
            return null;
        }
    };

    useEffect(() => {
        sessionCheck();
    }, [localStorage]);

    return (
        <>
            <TopBar />
            {children}
        </>
    );
}
