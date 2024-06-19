import { baseApi } from '@/shared/api';

const projectDeletionApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
      deleteProject: build.mutation<void, number>({
          query: (id) => ({
              method: 'DELETE',
              url: `project/${id}`,
          }),
      }),
  }),
});

export const { useDeleteProjectMutation } = projectDeletionApi;