export interface User {
    readonly firstName: string;
    readonly lastName: string;
    readonly roles: Array<string>;
    readonly email: string;

    readonly image?: string;
    readonly patronymic?: string;
    readonly description?: string;
}
