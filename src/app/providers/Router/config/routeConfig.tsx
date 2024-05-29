import { RouteProps } from 'react-router-dom';

export type AppRoutesProps = RouteProps

export enum AppRoutes {
    Main = 'Main',
    Details = 'Details',
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.Main]: '*',
    [AppRoutes.Details]: '/:id',
};

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
    [AppRoutes.Details]: {
        path: RoutePath.Details,
        element: <div />,
    },
    [AppRoutes.Main]: {
        path: RoutePath.Main,
        element: <div />,
    },
};