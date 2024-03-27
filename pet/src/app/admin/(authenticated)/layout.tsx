'use client';
import { getLocalStorageValue } from '@core/utils';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import TopBarAdmin from '@components/admin/TopBarAdmin';

export default function HomeLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const router = useRouter();

    const sessionCheck = async () => {
        const session_id = await localStorage.getItem('session_id');
        if (!session_id) {
            router.push('/admin/login');
            return null;
        }
    };

    useEffect(() => {
        sessionCheck();
    }, [typeof window]);

    return (
        <>
            <TopBarAdmin />
            {children}
        </>
    );
}
