import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Nav from '@/components/Nav';
import Providers from '@/app/Providers';
import Footer from '@/components/Footer';

const inter = Inter({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
    title: 'Roberto Menezes',
    description: 'Roberto Menezes frontend developer | Portfolio',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className="light" style={{ colorScheme: 'light' }}>
            <body>
                <Providers>
                    <div
                        className={`bg-bg-light dark:bg-bg-dark relative z-0 min-w-screen min-h-screen px-10 ${inter.className}`}
                    >
                        <div className="max-w-7xl mx-auto">
                            <Nav />
                            {children}
                            <Footer/>
                        </div>
                    </div>
                </Providers>
            </body>
        </html>
    );
}
