'use client';

import { ThemeProvider } from 'next-themes';
import { ReactNode } from 'react';

const Providers = ({ children }: { children: ReactNode }) => {
    return (
        <ThemeProvider
            attribute="class"
            themes={['light', 'dark']}
            enableSystem={false}
            storageKey="theme"
        >
            {children}
        </ThemeProvider>
    );
};

export default Providers;
