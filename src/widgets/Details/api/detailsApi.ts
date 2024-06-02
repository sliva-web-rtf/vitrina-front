import { baseApi } from '@/shared/api';
import { Project } from '@/entities/project';
import { mapDetailsDtoToModel } from '../lib/helpers/mapDetailsDtoToModel';
import { DetailsDto } from '../model/types/DetailsDto.ts';

const detailsApi = baseApi.injectEndpoints({
    endpoints: build => ({
        getDetails: build.query<Project, number>({
            query: id => `/project/${id}`,
            transformResponse: (response: DetailsDto) => mapDetailsDtoToModel(response),
        }),
    }),
});

export const { useGetDetailsQuery } = detailsApi;
