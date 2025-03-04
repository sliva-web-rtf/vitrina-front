import React, { useState } from 'react';

import { VStack } from '@/shared/ui';
import { StyledOtpInput } from '@/shared/ui/OtpInput/StyledOtpInput';
import { Typography } from '@mui/material';

interface EmailVerificationFormProps {
    email: string;
}

export const EmailVerificationForm = (props: EmailVerificationFormProps) => {
    const { email } = props;

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
            <StyledOtpInput value={otp} onChange={handleChange} />
        </VStack>
    );
};
