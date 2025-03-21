import { baseApi } from '@/shared/api';
import { ConfirmResponse, SignInResponse, SignUpResponse } from '../model';
import { ConfirmSchema, SignInSchema, SignUpSchema } from '../model';

const signApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        signUp: build.query<SignUpResponse, SignUpSchema>({
            query: (req) => ({
                url: '/auth/register',
                method: 'POST',
                body: req,
            }),
        }),
        confirm: build.query<ConfirmResponse, ConfirmSchema>({
            query: (req) => ({
                url: '/auth/confirm',
                method: 'POST',
                body: req,
            }),
        }),
        signIn: build.query<SignInResponse, SignInSchema>({
            query: (req) => ({
                url: '/auth/log-in',
                method: 'POST',
                body: req,
            }),
        }),
    }),
});

export const { useLazySignUpQuery, useLazyConfirmQuery, useLazySignInQuery } = signApi;
