import React, { useState } from 'react';

import { VStack } from '@/shared/ui';
import { StyledOtpInput } from '@/shared/ui/OtpInput/StyledOtpInput';
import { Typography } from '@mui/material';
import { SignUpFormData, SignUpResponse } from '../model';
import { Control, Controller, FieldErrors } from 'react-hook-form';

interface EmailVerificationFormProps {
    email: string;
    control: Control<SignUpFormData, any>;
    errors: FieldErrors<SignUpFormData>;
}

export const EmailVerificationForm = (props: EmailVerificationFormProps) => {
    const { email, control, errors } = props;

    const [otp, setOtp] = useState('');

    const handleChange = (newValue: string) => {
        setOtp(newValue);
    };

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
