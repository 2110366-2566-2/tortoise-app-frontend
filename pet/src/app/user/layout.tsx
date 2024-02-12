'use client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
export default function UserLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const queryClient = new QueryClient();
    queryClient.prefetchQuery;
    return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
}
