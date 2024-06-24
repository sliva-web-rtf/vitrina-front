import { baseApi } from '@/shared/api';
import { AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject } from '@reduxjs/toolkit';
import { FilterSchema } from 'src/features/filter';
import { ProjectsListSchema } from '@/widgets/ProjectsList';
import { DetailsSchema } from '@/entities/project';

export interface StateSchema {
    filter: FilterSchema;
    projectsList: ProjectsListSchema;
    projectDetails: DetailsSchema;
    [baseApi.reducerPath]: ReturnType<typeof baseApi.reducer>;
}

export type StateSchemaKey = keyof StateSchema;

export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StateSchema>;
    reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
    add: (key: StateSchemaKey, reducer: Reducer) => void;
    remove: (key: StateSchemaKey) => void;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
    reducerManager: ReducerManager;
}

export interface ThunkConfig<T> {
    rejectValue: T;
    state: StateSchema;
}
