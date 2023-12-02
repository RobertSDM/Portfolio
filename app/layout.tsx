import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
//components
import Nav from "@/components/Nav";
import Providers from "@/components/ThemeProvider";
import Footer from "@/components/Footer";

const inter = Inter({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
    title: "Roberto Menezes | Portfolio",
    description: "Roberto Menezes frontend developer | Portfolio",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html
            lang="en"
            className="light"
            style={{ colorScheme: "light" }}
            suppressHydrationWarning
        >
            <body
                className={`bg-alt-bg-light dark:bg-bg-dark relative z-0 min-w-screen min-h-screen px-10 ${inter.className}`}
            >
                <Providers>
                    <Nav />
                    <main className="max-w-7xl mx-auto">{children}</main>
                    <Footer />
                </Providers>
            </body>
        </html>
    );
}
