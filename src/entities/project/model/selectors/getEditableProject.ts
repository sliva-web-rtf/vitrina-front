import { StateSchema } from '@/app/providers/StoreProvider/config/StateSchema';

export const getEditableProject = (state: StateSchema) => state.projectDetails.editableProject;
