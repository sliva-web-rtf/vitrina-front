import { baseApi } from '@/shared/api';

import { SignUpResponse } from '../model/types/SignUpResponse';
import { SignUpSchema } from '../model/types/SignUpSchema';
import { ConfirmSchema } from '../model/types/ConfirmSchema';
import { ConfirmResponse } from '../model/types/ConfirmResponse';

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
    }),
});

export const { useLazySignUpQuery, useLazyConfirmQuery } = signApi;
