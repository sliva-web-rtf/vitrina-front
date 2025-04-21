import { RouteProps } from 'react-router-dom';
import { AdminPage } from '@/pages/AdminPage';

export type AppRoutesProps = RouteProps & { ignore?: boolean };

export enum AppRoutes {
    Main = 'Main',
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.Main]: '*',
};

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
    [AppRoutes.Main]: {
        path: RoutePath.Main,
        element: <AdminPage />,
        ignore: import.meta.env.VITE_WITH_ADMIN !== 'admin',
    },
};
