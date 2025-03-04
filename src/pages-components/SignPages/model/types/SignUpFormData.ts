import { Roles } from "./Roles";

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
    grade?: number;
    company?: string;
    companyPosition?: string;
}