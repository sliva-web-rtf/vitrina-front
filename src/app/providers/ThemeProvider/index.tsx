import { FC, ReactNode } from 'react';
import { ThemeProvider as Theme } from '@mui/material';
import { theme } from '@/shared/theme';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';

interface ThemeProviderProps {
    children: ReactNode;
}

export const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => (
    <AppRouterCacheProvider>
        <Theme theme={theme}>{children}</Theme>
    </AppRouterCacheProvider>
);
