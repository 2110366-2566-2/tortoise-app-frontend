import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Fira_Sans_Condensed } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });
const fira_sans_condensed = Fira_Sans_Condensed({ weight: ['600'], subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Petpal',
    description: 'by Tortoise not Lonely',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={fira_sans_condensed.className}>{children}</body>
        </html>
    );
}
