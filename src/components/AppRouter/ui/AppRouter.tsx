import { Suspense, useCallback } from 'react';
import { Route, RouteProps, Routes } from 'react-router-dom';
import { routeConfig } from '../config/routerConfig.tsx';
import { Text } from '../../Text/Text.tsx';

const AppRouter = () => {
    const render = useCallback((route: RouteProps) => {
        const element = (
            <Suspense fallback={<Text text={'Loading...'} size={'L'} align={'center'} />}>
                {route.element}
            </Suspense>
        );
        return (
            <Route
                key={route.path}
                path={route.path}
                element={element}
            />
        );
    }, []);

    return (
        <Routes>
            {Object.values(routeConfig).map(render)}
        </Routes>
    );
};

export default AppRouter;