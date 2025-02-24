import styles from './Authorization.module.scss';

import React from 'react';
import { Control, FieldErrors } from 'react-hook-form';

import { HStack } from '@/shared/ui';
import { ControlledFormInput } from '@/shared/ui/Input';
import { SignUpFormData } from '../model';

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
                name="lastName"
                rules={{ required: true }}
                inputProps={{
                    label: 'Фамилия*',
                    error: Boolean(errors.lastName),
                    autoComplete: 'lastName family-name lastname',
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
                name="middleName"
                rules={{ required: true }}
                inputProps={{
                    label: 'Отчество*',
                    error: Boolean(errors.middleName),
                    autoComplete: 'additional-name patronymic',
                }}
            />
            <ControlledFormInput
                control={control}
                name="company"
                inputProps={{
                    label: 'Компания',
                    error: Boolean(errors.company),
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
