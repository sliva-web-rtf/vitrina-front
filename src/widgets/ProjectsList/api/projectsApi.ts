import { FilterSchema } from '@/features/filter';
import { baseApi } from '@/shared/api';
import { removeFalsyFields } from '@/shared/lib';
import { mapProjectsDtoToModel } from '../lib/helpers/mapProjectsDtoToModel';
import { ProjectsResponse } from '../model/types/projectsDto';
import { ProjectsModel } from '../model/types/projectsModel';

const projectsApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        getProjects: build.query<ProjectsModel, FilterSchema>({
            query: (req) => ({
                url: '/project/search',
                method: 'POST',
                body: removeFalsyFields(req),
            }),
            transformResponse: (response: ProjectsResponse) => mapProjectsDtoToModel(response),
        }),
    }),
});

export const { useGetProjectsQuery } = projectsApi;
