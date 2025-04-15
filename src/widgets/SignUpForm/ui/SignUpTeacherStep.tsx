import React from 'react';

import { VStack } from '@/shared/ui';
import { ControlledFormInput } from '@/shared/ui/Input';
import { Control, FieldErrors } from 'react-hook-form';
import { SignUpFormData } from '../model/types/SignUpFormData';

export const SignUpTeacherStep = ({
    control,
    errors,
}: {
    control: Control<SignUpFormData, any>;
    errors: FieldErrors<SignUpFormData>;
}) => {
    return (
        <VStack spacing={3}>
            <ControlledFormInput
                control={control}
                name="surname"
                rules={{ required: true }}
                inputProps={{
                    label: 'Фамилия*',
                    error: Boolean(errors.lastName),
                    autoComplete: 'family-name surname',
                }}
            />
            <ControlledFormInput
                control={control}
                name="firstName"
                rules={{ required: true }}
                inputProps={{
                    label: 'Имя*',
                    error: Boolean(errors.firstName),
                    autoComplete: 'firstName given-name firstname name',
                }}
            />
            <ControlledFormInput
                control={control}
                name="lastName"
                rules={{ required: true }}
                inputProps={{
                    label: 'Отчество*',
                    error: Boolean(errors.surname),
                    autoComplete: 'additional-name patronymic lastName',
                }}
            />
        </VStack>
    );
};
