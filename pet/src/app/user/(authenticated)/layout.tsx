import TopBar from '../../../../components/TopBar';

export default function HomeLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <TopBar />
            {children}
        </>
    );
}
