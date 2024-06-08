import { baseApi } from '@/shared/api';
import { ProjectsRequest } from '../model/types/projectsRequest';
import { ProjectsResponse } from '../model/types/projectsDto';
import { mapProjectsDtoToModel } from '../lib/helpers/mapProjectsDtoToModel';
import { ProjectsModel } from '../model/types/projectsModel';

const projectsApi = baseApi.injectEndpoints({
    endpoints: build => ({
        getProjects: build.query<ProjectsModel, ProjectsRequest>({
            query: req => ({
                url: '/project/search',
                method: 'POST',
                body: req,
            }),
            transformResponse: (response: ProjectsResponse) => mapProjectsDtoToModel(response),
        }),
    }),
});

export const { useGetProjectsQuery } = projectsApi;
