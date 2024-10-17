import { mapFilterDtoToModel } from '@/features/filter/lib/helpers/filterMapper';
import { baseApi } from '@/shared/api';
import { SelectOption } from '@/shared/lib/types/selectOption';

const filterApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        getPeriods: build.query<Array<SelectOption>, void>({
            query: () => '/project/periods',
            transformResponse: (response: Array<string>) => mapFilterDtoToModel(response),
        }),
        getOrganizations: build.query<Array<SelectOption>, void>({
            query: () => '/project/organizations',
            transformResponse: (response: Array<string>) => mapFilterDtoToModel(response),
        }),
    }),
});

export const { useGetPeriodsQuery, useGetOrganizationsQuery } = filterApi;
