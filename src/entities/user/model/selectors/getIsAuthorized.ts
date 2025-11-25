import { StateSchema } from '@/app/providers/StoreProvider/config/StateSchema';

export const getIsAuthorized = (state: StateSchema) => state.auth.isAuthorized;
