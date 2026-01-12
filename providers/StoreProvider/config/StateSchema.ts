import { ConstructorProjectSchema } from '@/entities/constructorProject';
import { DetailsSchema } from '@/entities/project';
import { AuthSchema } from '@/entities/user';
import { FilterSchema } from '@/features/filter';
import { ProjectsListSchema } from '@/widgets/ProjectsList';

export interface StateSchema {
    filter: FilterSchema;
    projectsList: ProjectsListSchema;
    projectDetails: DetailsSchema;
    constructorProject: ConstructorProjectSchema;
    auth: AuthSchema;
}

export type StateSchemaKey = keyof StateSchema;