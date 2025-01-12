import { baseApi } from '@/shared/api';

const imageApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        checkImage: build.query<string, string>({
            query: (imageUrl) => ({
                url: imageUrl,
                method: 'HEAD',
            }),
        }),
    }),
});

export const { useCheckImageQuery } = imageApi;
