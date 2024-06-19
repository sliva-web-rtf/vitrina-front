import { baseApi } from '@/shared/api';
import { ProjectCreationFormSchema } from '../model/types/projectCreationForm';
import { projectCreationToDto } from '../lib/helpers/projectCreationMapper';

const projectCreationApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
      createProject: build.mutation<string, ProjectCreationFormSchema>({
          query: (project) => ({
              method: 'POST',
              url: 'project/create',
              body: {
                ...projectCreationToDto(project)
              },
          }),
      }),
  }),
});

export const { useCreateProjectMutation } = projectCreationApi;