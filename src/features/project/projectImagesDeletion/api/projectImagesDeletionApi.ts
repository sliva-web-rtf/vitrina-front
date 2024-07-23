import { baseApi } from '@/shared/api';

const projectImagesDeletionApi = baseApi.injectEndpoints({
    endpoints: build => ({
        deleteImages: build.mutation<void, number>({
            query: id => ({
                method: 'DELETE',
                url: `project/${id}/images`,
            }),
        }),
    }),
});

export const { useDeleteImagesMutation } = projectImagesDeletionApi;
