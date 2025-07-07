import { baseApi } from '@/shared/api';
import { User } from '../model/types/user';

const userApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        getUser: build.query<User, void>({
            query: () => ({
                url: '/auth/get-me',
                method: 'GET',
            }),
        }),
    }),
});

export const { useGetUserQuery } = userApi;

export default userApi;
