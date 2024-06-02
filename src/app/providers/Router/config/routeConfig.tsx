import { MainPage } from '@/pages/MainPage';
import { RouteProps } from 'react-router-dom';
import { DetailsPage } from '@/pages/DetailsPage';
import { ProjectCreation } from '@/pages/ProjectCreation';

export type AppRoutesProps = RouteProps;

export enum AppRoutes {
    Main = 'Main',
    Details = 'Details',
    Creation = 'Creation'
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.Main]: '*',
    [AppRoutes.Details]: '/:id',
    [AppRoutes.Creation]: '/creation'
};

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
    [AppRoutes.Main]: {
        path: RoutePath.Main,
        element: <MainPage />,
    },
    [AppRoutes.Details]: {
        path: RoutePath.Details,
        element: <DetailsPage />,
    },
    [AppRoutes.Creation]: {
        path: RoutePath.Creation,
        element: <ProjectCreation></ProjectCreation>,
    },
};
