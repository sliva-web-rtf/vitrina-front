'use client';

import { CssBaseline } from '@mui/material';
import { ReactNode } from 'react';
import { ErrorBoundary } from './ErrorBoundary';
import { StoreProvider } from './StoreProvider';
import { ThemeProvider } from './ThemeProvider';
import { UserProvider } from '@/entities/user';

interface ProvidersProps {
    readonly children: ReactNode;
}

export function Providers(props: ProvidersProps) {
    const { children } = props;

    return (
        <ErrorBoundary>
            <StoreProvider>
                <ThemeProvider>
                    <CssBaseline />
                    <UserProvider />
                    {children}
                </ThemeProvider>
            </StoreProvider>
        </ErrorBoundary>
    );
}
