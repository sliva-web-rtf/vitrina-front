export interface DetailsDto {
    readonly id: number;
    readonly name: string;
    readonly description: string;
    readonly aim: string;
    readonly client: string;
    readonly contents: Array<string>;
    readonly tags: Array<{ name: string }>;
    readonly users: Array<{
        readonly email: string;
        readonly firstName: string;
        readonly lastName: string;
        readonly patronymic: string;
        readonly roles: Array<{ name: string }>;
        readonly avatar: string;
    }>;
}
