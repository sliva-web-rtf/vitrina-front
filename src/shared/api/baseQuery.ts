import {
    type BaseQueryFn,
    FetchArgs,
    fetchBaseQuery,
    FetchBaseQueryError,
    FetchBaseQueryMeta,
} from '@reduxjs/toolkit/query';

export const baseQuery: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError, object, FetchBaseQueryMeta> =
    fetchBaseQuery({
        baseUrl: process.env.NEXT_PUBLIC_API,
    });
