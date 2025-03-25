import { Roles } from './Roles';

export type SignUpFormData = {
    role: Roles;
    email: string;
    password: string;
    passwordConfirm: string;
    firstName: string;
    lastName: string;
    surname: string;
    teamRole?: string;
    educationLevel?: string;
    educationCourse?: string;
    companyName?: string;
    companyPosition?: string;
    confirmationCode: string;
};
