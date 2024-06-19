import { MainPage } from '@/pages/MainPage';
import { RouteProps } from 'react-router-dom';
import { DetailsPage } from '@/pages/DetailsPage';
import { AdminPage } from '@/pages/AdminPage';

export type AppRoutesProps =  RouteProps & { ignore?: boolean } ;

export enum AppRoutes {
    Main = 'Main',
    Details = 'Details',
    Admin = 'Admin'
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.Main]: '*',
    [AppRoutes.Details]: '/:id',
    [AppRoutes.Admin]: '/admin',
};

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
    [AppRoutes.Main]: {
        path: RoutePath.Main,
        element: <MainPage />,
    },
    [AppRoutes.Admin]: {
        path: RoutePath.Admin,
        element: <AdminPage />,
        ignore: import.meta.env.VITE_WITH_ADMIN !== 'admin'
    },
    [AppRoutes.Details]: {
        path: RoutePath.Details,
        element: <DetailsPage />,
    },
};
