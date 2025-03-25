import styles from './SignUp.module.scss';

import React from 'react';
import { Control, FieldErrors } from 'react-hook-form';

import { HStack } from '@/shared/ui';
import { ControlledFormInput } from '@/shared/ui/Input';
import { SignUpFormData } from '../model/types/SignUpFormData';

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
                name="surname"
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
                name="lastName"
                rules={{ required: true }}
                inputProps={{
                    label: 'Отчество*',
                    error: Boolean(errors.surname),
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
                name="educationLevel"
                rules={{ required: true }}
                inputProps={{
                    label: 'Уровень образования*',
                    error: Boolean(errors.educationCourse),
                }}
            />
            <ControlledFormInput
                control={control}
                name="educationCourse"
                rules={{ required: true }}
                inputProps={{
                    type: 'number',
                    label: 'Курс*',
                    error: Boolean(errors.educationLevel),
                }}
            />
        </HStack>
    );
};
