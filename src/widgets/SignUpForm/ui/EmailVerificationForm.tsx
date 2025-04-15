import React from 'react';
import { Typography } from '@mui/material';
import { Control, Controller, FieldErrors } from 'react-hook-form';

import { VStack } from '@/shared/ui';
import { StyledOtpInput } from '@/shared/ui/OtpInput/StyledOtpInput';
import { SignUpFormData } from '../model/types/SignUpFormData';

interface EmailVerificationFormProps {
    email: string;
    control: Control<SignUpFormData, any>;
    errors: FieldErrors<SignUpFormData>;
}

export const EmailVerificationForm = (props: EmailVerificationFormProps) => {
    const { email, control, errors } = props;

    return (
        <VStack spacing={4}>
            <VStack spacing={1} alignItems={'center'}>
                <Typography variant="h4">Введите код</Typography>
                <Typography variant="body1" textAlign={'center'} color={'var(--tertiary-color-mono)'}>
                    Мы отправили код подтверждения по адресу {email}
                </Typography>
            </VStack>
            <Controller
                name="confirmationCode"
                control={control}
                defaultValue=""
                render={({ field }) => <StyledOtpInput {...field} length={6} inputMode="numeric" />}
            />
        </VStack>
    );
};
