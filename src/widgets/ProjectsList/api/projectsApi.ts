import { baseApi } from '@/shared/api';
import { ProjectsRequest } from '../model/types/projectsRequest';
import { ProjectsResponse } from '../model/types/projectsDto';
import { mapProjectsDtoToModel } from '../lib/helpers/mapProjectsDtoToModel';
import { ProjectsModel } from '../model/types/projectsModel';
import { projectsListActions } from '@/widgets/ProjectsList';

const projectsApi = baseApi.injectEndpoints({
    endpoints: build => ({
        getProjects: build.query<ProjectsModel, ProjectsRequest>({
            query: req => ({
                url: '/project/search',
                method: 'POST',
                body: req,
            }),
            onQueryStarted: async (_, api) => {
                const { dispatch, queryFulfilled } = api;
                try {
                    const { data } = await queryFulfilled;
                    const totalPages = data.metadata.totalPages || 1;
                    dispatch(projectsListActions.setTotalPages(totalPages));
                } catch (err) {
                    /* empty */
                }
            },  
            transformResponse: (response: ProjectsResponse) => mapProjectsDtoToModel(response),
        }),
    }),
});

export const { useGetProjectsQuery } = projectsApi;
