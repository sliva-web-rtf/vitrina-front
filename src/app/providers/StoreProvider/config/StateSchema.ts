import { ConstructorProjectSchema } from '@/entities/constructorProject';
import { DetailsSchema } from '@/entities/project';
import { AuthSchema } from '@/entities/user';
import { FilterSchema } from '@/features/filter';
import { ProjectsListSchema } from '@/widgets/ProjectsList';

export interface StateSchema {
    filter: FilterSchema;
    projectsList: ProjectsListSchema;
    projectDetails: DetailsSchema;
<<<<<<< HEAD
=======
    constructorProject: ConstructorProjectSchema;
    auth: AuthSchema;
    [baseApi.reducerPath]: ReturnType<typeof baseApi.reducer>;
>>>>>>> 73109a8c3f19913dbae25fd5a9ec15a77a01d887
}

export type StateSchemaKey = keyof StateSchema;