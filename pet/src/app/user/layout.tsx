'use client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function UserLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const queryClient = new QueryClient();
    queryClient.prefetchQuery;
    return (
        <QueryClientProvider client={queryClient}>
            <ToastContainer />
            {children}
        </QueryClientProvider>
    );
}
