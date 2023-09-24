import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Nav from '@/components/Nav';

const inter = Inter({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
    title: 'Roberto Menezes',
    description: 'Roberto Menezes frontend developer, portfolio',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={`bg-[#DDE6F1] ${inter.className}`}>
                <Nav />
                {children}
            </body>
        </html>
    );
}
