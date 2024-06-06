/* eslint-disable @typescript-eslint/ban-ts-comment */
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { StateSchema } from './StateSchema';
import { baseApi } from '@/shared/api';
import { filterReducer } from '@/features/filter';
import { projectsListReducer } from '@/widgets/ProjectsList';

const rootReducer = combineReducers({
    filter: filterReducer,
    projectsList: projectsListReducer,
    [baseApi.reducerPath]: baseApi.reducer,
});

export function createReduxStore(initialState?: StateSchema) {
    const store = configureStore({
        reducer: rootReducer,
        middleware: getDefaultMiddleware =>
            getDefaultMiddleware({
                serializableCheck: false,
            }).concat(baseApi.middleware),
        preloadedState: initialState,
        devTools: import.meta.env.VITE_MODE === 'development',
    });

    return store;
}

export type Store = ReturnType<typeof createReduxStore>;

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
