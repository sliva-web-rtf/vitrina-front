import { User } from './user';

export type AuthSchema = {
    token: string | null;
    expiresIn: number | null;
    user: User | null;
};
