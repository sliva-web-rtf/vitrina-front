import { mapFilterDtoToModel } from '@/features/filter/lib/helpers/filterMapper';
import { baseApi } from '@/shared/api';
import { SelectOption } from '@/shared/lib/types/selectOption';

const filterApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        getSpheres: build.query<Array<SelectOption>, void>({
            query: () => '/project/spheres',
            transformResponse: (response: Array<string>) => mapFilterDtoToModel(response),
        }),
        getCustomers: build.query<Array<SelectOption>, void>({
            query: () => '/project/customers',
            transformResponse: (response: Array<string>) => mapFilterDtoToModel(response),
        }),
        getProjectTypes: build.query<Array<SelectOption>, void>({
            query: () => '/project/types',
            transformResponse: (response: Array<string>) => mapFilterDtoToModel(response),
        }),
    }),
});

export const { useGetSpheresQuery, useGetCustomersQuery, useGetProjectTypesQuery } = filterApi;
