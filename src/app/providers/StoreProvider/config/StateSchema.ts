import { DetailsSchema } from '@/entities/project';
import { FilterSchema } from '@/features/filter';
import { ProjectsListSchema } from '@/widgets/ProjectsList';

export interface StateSchema {
    filter: FilterSchema;
    projectsList: ProjectsListSchema;
    projectDetails: DetailsSchema;
}

export type StateSchemaKey = keyof StateSchema;