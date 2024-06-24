import { baseApi } from '@/shared/api';
import { ProjectCreationFormSchema, ProjectEditFormSchema } from '../model/types/projectCreationForm';
import { projectCreationToDto } from '../lib/helpers/projectCreationMapper';
import { projectEditToDto } from '../lib/helpers/projectEditMapper';


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
      updateProject: build.mutation<void, ProjectEditFormSchema>({
        query: (project) => ({
            method: 'PUT',
            url: `project/${project.id}`,
            body: {
              ...projectEditToDto(project)
            },
        }),
    }),
  }),
});

export const { useCreateProjectMutation, useUpdateProjectMutation } = projectCreationApi;