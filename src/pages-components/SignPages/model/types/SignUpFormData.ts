import { Roles } from './Roles';

export type SignUpFormData = {
    role: Roles;
    email: string;
    password: string;
    passwordConfirm: string;
    firstName: string;
    lastName: string;
    middleName: string;
    teamRole?: string;
    educaion?: string;
    grade?: string;
    company?: string;
    companyPosition?: string;
};
