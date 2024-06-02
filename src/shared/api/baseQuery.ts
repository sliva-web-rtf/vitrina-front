import {
    FetchArgs,
    type BaseQueryFn,
    FetchBaseQueryError,
    FetchBaseQueryMeta,
    fetchBaseQuery,
} from '@reduxjs/toolkit/query';

export const baseQuery: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError, object, FetchBaseQueryMeta> =
    fetchBaseQuery({
        baseUrl: import.meta.env.VITE_API,
    });
