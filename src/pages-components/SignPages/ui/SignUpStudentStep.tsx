import styles from './Authorization.module.scss';

import React from 'react';
import { Control, FieldErrors } from 'react-hook-form';

import { HStack } from '@/shared/ui';
import { ControlledFormInput } from '@/shared/ui/Input';
import { SignUpFormData } from '../model';

export const SignUpStudentStep = ({
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
                name="teamRole"
                inputProps={{
                    label: 'Роль в команде',
                    error: Boolean(errors.teamRole),
                }}
            />
            <ControlledFormInput
                control={control}
                name="educaion"
                rules={{ required: true }}
                inputProps={{
                    label: 'Уровень образования*',
                    error: Boolean(errors.educaion),
                }}
            />
            <ControlledFormInput
                control={control}
                name="grade"
                rules={{ required: true }}
                inputProps={{
                    label: 'Курс*',
                    error: Boolean(errors.grade),
                }}
            />
        </HStack>
    );
};
