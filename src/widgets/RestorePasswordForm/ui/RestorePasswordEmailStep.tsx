import React from 'react';
import { Control, FieldErrors } from 'react-hook-form';
import { Typography } from '@mui/material';

import { BaseButton, VStack } from '@/shared/ui';
import { ControlledFormInput } from '@/shared/ui/Input';
import { RestorePasswordFormData } from '../model/types/RestorePasswordFormData';

import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';

export const RestorePasswordEmailStep = ({
    control,
    errors,
}: {
    control: Control<RestorePasswordFormData, any>;
    errors: FieldErrors<RestorePasswordFormData>;
}) => {
    return (
        <VStack spacing={4}>
            <VStack spacing={0.5}>
                <Typography variant="h3">Восстановление пароля</Typography>
                <Typography variant="body1" textAlign={'center'} color={'var(--tertiary-color-mono)'}>
                    Отправим ссылку для смены пароля на email.
                </Typography>
            </VStack>
            <ControlledFormInput
                control={control}
                name="email"
                rules={{
                    required: true,
                    pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Неправильный формат почты',
                    },
                }}
                inputProps={{
                    label: 'Электронная почта*',
                    placeholder: 'bogdanbikaev@urfu.me',
                    error: Boolean(errors.email),
                }}
            />
            <BaseButton type="submit" variant="contained" endIcon={<ArrowForwardRoundedIcon />}>
                <Typography variant="subtitle1">Продолжить</Typography>
            </BaseButton>
        </VStack>
    );
};
