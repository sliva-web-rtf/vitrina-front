import { memo, Suspense, useCallback } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AppRoutesProps, routeConfig } from '../config/routeConfig';
import { PageLoader } from '@/widgets/PageLoader';
import { Layout } from '@/widgets/Layout';

const AppRouter = () => {
    const renderWithWrapper = useCallback((route: AppRoutesProps) => {
        return <Route key={route.path} path={route.path} element={route.element} />;
    }, []);

    return (
        <Suspense fallback={<PageLoader />}>
            <Layout>
                <Routes>
                    {Object.values(routeConfig)
                        .filter(route => !route.ignore)
                        .map(renderWithWrapper)}
                </Routes>
            </Layout>
        </Suspense>
    );
};

export default memo(AppRouter);
