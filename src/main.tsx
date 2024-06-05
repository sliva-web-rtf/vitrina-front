import ReactDOM from 'react-dom/client';
import App from './app/App.tsx';
import '@/app/styles/index.scss';
import { BrowserRouter } from 'react-router-dom';
import ErrorBoundary from './app/providers/ErrorBoundary/ui/ErrorBoundary.tsx';
import { CssBaseline } from '@mui/material';
import ThemeProvider from './app/providers/ThemeProvider/ThemeProvider.tsx';
import { StoreProvider } from './app/providers/StoreProvider/index.ts';
import { ScrollProvider } from '@/app/providers/ScrollProvider';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
        <ScrollProvider>
            <StoreProvider>
                <ErrorBoundary>
                    <ThemeProvider>
                        <CssBaseline />
                        <App />
                    </ThemeProvider>
                </ErrorBoundary>
            </StoreProvider>
        </ScrollProvider>
    </BrowserRouter>,
);
