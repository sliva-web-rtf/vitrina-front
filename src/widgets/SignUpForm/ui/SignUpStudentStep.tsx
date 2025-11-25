import styles from './SignUp.module.scss';

import React from 'react';
import { Control, FieldErrors } from 'react-hook-form';

import { BaseSelect, HStack } from '@/shared/ui';
import { ControlledFormInput } from '@/shared/ui/Input';
import { SignUpFormData } from '../model/types/SignUpFormData';
import { ControlledFormSelect, FormSelect } from '@/shared/ui/Select';

const EDU_LEVEL_OPTIONS = [
    { label: 'Бакалавр', value: 'Bachelors' },
    { label: 'Специалитет', value: 'Specialty' },
    { label: 'Магистратура', value: 'Magistracy' },
    { label: 'Выпускник', value: 'Postgraduate' },
    { label: 'Не студент', value: 'NotStudent' },
];

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
            <ControlledFormSelect
                control={control}
                name="educationLevel"
                rules={{ required: true }}
                options={EDU_LEVEL_OPTIONS}
            />
            <ControlledFormInput
                control={control}
                name="educationCourse"
                rules={{ required: true }}
                inputProps={{
                    type: 'number',
                    label: 'Курс*',
                    error: Boolean(errors.educationCourse),
                }}
            />
        </HStack>
    );
};
