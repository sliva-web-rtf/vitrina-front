import { Role } from './role';

export interface User {
    readonly id: number;
    readonly firstName: string;
    readonly lastName: string;
    readonly roles: Role[];
    readonly email: string;

    readonly image?: string;
    readonly patronymic?: string;
    readonly description?: string;
}
