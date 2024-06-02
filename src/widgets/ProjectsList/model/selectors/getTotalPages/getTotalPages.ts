import { StateSchema } from '@/app/providers/StoreProvider/config/StateSchema.ts';

export const getTotalPages = (state: StateSchema) => state.projectsList.totalPages;
