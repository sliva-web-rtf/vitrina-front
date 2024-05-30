import { memo, Suspense, useCallback } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AppRoutesProps, routeConfig } from '../config/routeConfig';
import { Box } from '@mui/material';
import { PageLoader } from '@/widgets/PageLoader/ui/PageLoader';

const AppRouter = () => {
    const renderWithWrapper = useCallback((route: AppRoutesProps) => {
        return <Route key={route.path} path={route.path} element={route.element} />;
    }, []);

    return (
        <Suspense fallback={<PageLoader />}>
            <Box className="page-wrapper">
                <Routes>{Object.values(routeConfig).map(renderWithWrapper)}</Routes>{' '}
            </Box>
        </Suspense>
    );
};

export default memo(AppRouter);
