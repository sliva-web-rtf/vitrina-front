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
        prepareHeaders: headers => {
            const token = import.meta.env.VITE_API_TOKEN;

            if (token) {
                headers.set('Authorization', `Bearer ${token}`);
            }

            return headers;
        },
    });
