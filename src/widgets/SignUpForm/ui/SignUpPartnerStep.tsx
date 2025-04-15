import styles from './SignUp.module.scss';

import React from 'react';
import { Control, FieldErrors } from 'react-hook-form';

import { HStack } from '@/shared/ui';
import { ControlledFormInput } from '@/shared/ui/Input';
import { SignUpFormData } from '../model/types/SignUpFormData';

export const SignUpPartnerStep = ({
    control,
    errors,
}: {
    control: Control<SignUpFormData, any>;
    errors: FieldErrors<SignUpFormData>;
}) => {
    return (
        <HStack className={styles['halfInputsStack']}>
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
            <ControlledFormInput
                control={control}
                name="companyName"
                inputProps={{
                    label: 'Компания',
                    error: Boolean(errors.companyName),
                }}
            />
            <ControlledFormInput
                control={control}
                name="companyPosition"
                rules={{ required: true }}
                inputProps={{
                    label: 'Должность*',
                    error: Boolean(errors.companyPosition),
                    fullWidth: true,
                }}
            />
        </HStack>
    );
};
