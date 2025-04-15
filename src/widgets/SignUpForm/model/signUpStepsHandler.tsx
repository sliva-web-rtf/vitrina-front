import { ReactNode } from 'react';
import { Control, FieldErrors } from 'react-hook-form';

import { EmailVerificationForm } from '../ui/EmailVerificationForm';
import { SignUpRoleSelector } from '../ui/SignUpRoleSelector';
import { SignUpMainStep } from '../ui/SignUpMainStep';
import { SignUpTeacherStep } from '../ui/SignUpTeacherStep';
import { SignUpFormData } from './types/SignUpFormData';
import { SignUpStudentStep } from '../ui/SignUpStudentStep';
import { SignUpPartnerStep } from '../ui/SignUpPartnerStep';
import { Roles } from './types/Roles';

export function getSignUpStep(
    step: number,
    control: Control<SignUpFormData, any>,
    errors: FieldErrors<SignUpFormData>,
    formData: SignUpFormData,
): ReactNode {
    switch (step) {
        case 0:
            return <SignUpRoleSelector control={control} errors={errors} />;
        case 1:
            return <SignUpMainStep control={control} errors={errors} />;
        case 2:
            return getThirdStep(formData.role, control, errors);
        case 3:
            return <EmailVerificationForm email={formData.email} control={control} errors={errors} />;
        default:
            throw new Error('unexpected step value');
    }
}

function getThirdStep(
    role: SignUpFormData['role'],
    control: Control<SignUpFormData, any>,
    errors: FieldErrors<SignUpFormData>,
) {
    switch (role) {
        case Roles.student:
            return <SignUpStudentStep control={control} errors={errors} />;
        case Roles.teacher:
            return <SignUpTeacherStep control={control} errors={errors} />;
        case Roles.partner:
            return <SignUpPartnerStep control={control} errors={errors} />;
    }
}
