import { baseApi } from '@/shared/api';
import { SignInResponse } from '../model/types/SignInResponse';
import { SignInSchema } from '../model/types/SignInSchema';

const signApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        signIn: build.query<SignInResponse, SignInSchema>({
            query: (req) => ({
                url: '/auth/log-in',
                method: 'POST',
                body: req,
            }),
        }),
    }),
});

export const { useLazySignInQuery } = signApi;
