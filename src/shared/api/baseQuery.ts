import { StateSchema } from '@/app/providers/StoreProvider/config/StateSchema';
import {
    type BaseQueryFn,
    FetchArgs,
    fetchBaseQuery,
    FetchBaseQueryError,
    FetchBaseQueryMeta,
    RootState,
} from '@reduxjs/toolkit/query';
import { headers } from 'next/headers';

export const baseQuery: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError, object, FetchBaseQueryMeta> =
    fetchBaseQuery({
        baseUrl: process.env.NEXT_PUBLIC_API,
        prepareHeaders: (headers, { getState }) => {
            const token = (getState() as StateSchema).auth.token;

            if (token) {
                headers.set('Authorization', `Bearer ${token}`);
            }

            return headers;
        },
    });
