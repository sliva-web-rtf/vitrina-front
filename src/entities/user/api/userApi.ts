import { baseApi } from '@/shared/api';

const userApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        getUser: build.query({
            query: () => ({
                url: '/auth/log-in',
                method: 'GET',
            }),
        }),
    }),
});
