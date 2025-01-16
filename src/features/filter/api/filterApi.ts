import { mapFilterDtoToModel } from '@/features/filter/lib/helpers/filterMapper.ts';
import { baseApi } from '@/shared/api';
import { SelectOption } from '@/shared/lib/types/selectOption.ts';

const filterApi = baseApi.injectEndpoints({
    endpoints: build => ({
        getPeriods: build.query<Array<SelectOption>, void>({
            query: () => '/project/periods',
            transformResponse: (response: Array<string>) => mapFilterDtoToModel(response),
        }),
        getOrganizations: build.query<Array<SelectOption>, void>({
            query: () => '/project/organizations',
            transformResponse: (response: Array<string>) => mapFilterDtoToModel(response),
        }),
        getTypes: build.query<Array<string>, void>({
            query: () => '/project/types',
        }),
        getSpheres: build.query<Array<string>, void>({
            query: () => '/project/spheres',
        }),
    }),
});

export const { useGetPeriodsQuery, useGetOrganizationsQuery, useGetTypesQuery, useGetSpheresQuery } = filterApi;
