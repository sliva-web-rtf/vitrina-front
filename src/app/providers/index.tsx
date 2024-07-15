import { ReactNode } from 'react';
import { ThemeProvider } from './ThemeProvider';
import { StoreProvider } from './StoreProvider';
import { ErrorBoundary } from './ErrorBoundary';
import { CssBaseline } from '@mui/material';

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
                    {children}
                </ThemeProvider>
            </StoreProvider>
        </ErrorBoundary>
    );
}
