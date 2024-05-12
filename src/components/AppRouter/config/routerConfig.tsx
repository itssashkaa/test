import { Navigate, RouteProps } from 'react-router-dom';
import { CountryListPage } from '../../../pages/CountryListPage';
import { NotFoundPage } from '../../../pages/NotFoundPage';
import { CountryDetailsPage } from '../../../pages/CountryDetailsPage';

export enum AppRoutes {
    MAIN = 'main',
    COUNTRIES = 'countries',
    COUNTRIES_DETAILS = 'countries_details',
    NOT_FOUND = 'not_found'
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.COUNTRIES]: '/countries',
    [AppRoutes.COUNTRIES_DETAILS]: '/countries/', // + :id,
    [AppRoutes.NOT_FOUND]: '*',
}

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <Navigate to={RoutePath.countries} replace />
    },
    [AppRoutes.COUNTRIES]: {
        path: RoutePath.countries,
        element: <CountryListPage />
    },
    [AppRoutes.COUNTRIES_DETAILS]: {
        path: RoutePath.countries_details + ':id',
        element: <CountryDetailsPage />
    },
    [AppRoutes.NOT_FOUND]: {
        path: RoutePath.not_found,
        element: <NotFoundPage />
    },
}