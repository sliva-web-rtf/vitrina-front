import { memo, Suspense, useCallback } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AppRoutesProps, routeConfig } from '../config/routeConfig';

const AppRouter = () => {
    const renderWithWrapper = useCallback((route: AppRoutesProps) => {
        return (
            <Route
                key={route.path}
                path={route.path}
                element={route.element}
            />
        );
    }, []);

    return (
      // TODO: исправить на норм loader
        <Suspense fallback="Loading...">
            <Routes>{Object.values(routeConfig).map(renderWithWrapper)}</Routes>{' '}
        </Suspense>
    );
};

export default memo(AppRouter);