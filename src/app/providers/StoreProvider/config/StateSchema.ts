import { DetailsSchema } from '@/entities/project';
import { FilterSchema } from '@/features/filter';
import { baseApi } from '@/shared/api';
import { ProjectsListSchema } from '@/widgets/ProjectsList';

export interface StateSchema {
    filter: FilterSchema;
    projectsList: ProjectsListSchema;
    projectDetails: DetailsSchema;
    [baseApi.reducerPath]: ReturnType<typeof baseApi.reducer>;
}

export type StateSchemaKey = keyof StateSchema;
