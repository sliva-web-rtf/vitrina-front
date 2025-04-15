import { Roles } from '../Roles';
import { SignUpFormData } from '../SignUpFormData';
import { SignUpSchema } from '../SignUpSchema';

export const SignUpFormDataToSchemaMapper = (formData: SignUpFormData): SignUpSchema => {
    const { role, firstName, lastName, surname, email, password, passwordConfirm, educationCourse, educationLevel } =
        formData;

    const numberEducationCourse = Number(educationCourse);

    if (!numberEducationCourse) throw new TypeError('educationCourse was not a number');

    if (!educationLevel) throw new Error('educationLevel is null');

    return {
        firstName,
        lastName,
        surname,
        email,
        password,
        passwordConfirm,
        educationCourse: numberEducationCourse,
        educationLevel,
        roleInTeam: Roles[role],
    };
};
