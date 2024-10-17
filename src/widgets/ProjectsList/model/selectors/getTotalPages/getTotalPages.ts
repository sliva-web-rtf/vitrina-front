import { StateSchema } from '@/app/providers/StoreProvider/config/StateSchema';

export const getTotalPages = (state: StateSchema) => state.projectsList.totalPages;
