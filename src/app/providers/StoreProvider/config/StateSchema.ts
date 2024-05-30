import { baseApi } from '@/shared/api';
import { EnhancedStore, Reducer, ReducersMapObject, AnyAction, CombinedState } from '@reduxjs/toolkit';

export interface StateSchema {
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