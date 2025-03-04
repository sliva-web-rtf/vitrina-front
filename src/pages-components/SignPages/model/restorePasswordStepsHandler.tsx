import { ReactNode } from 'react';
import { Control, FieldErrors } from 'react-hook-form';

import { RestorePasswordFormData } from './types/RestorePasswordFormData';
import { RestorePasswordEmailStep } from '../ui/RestorePasswordEmailStep';
import { RestorePasswordSendStep } from '../ui/RestorePasswordSendStep';

export function getRestorePasswordStep(
    step: number,
    control: Control<RestorePasswordFormData, any>,
    errors: FieldErrors<RestorePasswordFormData>,
    formData?: RestorePasswordFormData,
): ReactNode {
    switch (step) {
        case 0:
            return <RestorePasswordEmailStep control={control} errors={errors} />;
        case 1:
            return <RestorePasswordSendStep email={formData ? formData.email : ''} />;
        case 2:
        default:
            throw new RangeError('Step was out of range');
    }
}
