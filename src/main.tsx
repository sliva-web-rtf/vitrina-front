import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/App.tsx';
import '@/app/styles/index.scss'
import { BrowserRouter } from 'react-router-dom';
import ErrorBoundary from './app/providers/ErrorBoundary/ui/ErrorBoundary.tsx';
import { CssBaseline } from '@mui/material';
import ThemeProvider from './app/providers/ThemeProvider/ThemeProvider.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <BrowserRouter>
            <ErrorBoundary>
                <ThemeProvider>
                    <CssBaseline />
                    <App />
                </ThemeProvider>
            </ErrorBoundary>
        </BrowserRouter>
    </React.StrictMode>,
);
