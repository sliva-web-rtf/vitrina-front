import React, { useState } from 'react';
import { MuiOtpInput } from 'mui-one-time-password-input';
import { styled, Typography } from '@mui/material';

import { VStack } from '@/shared/ui';

const StyledOtpInput = styled(MuiOtpInput)(() => ({
    '& .MuiOtpInput-TextField': {
        backgroundColor: '#F2F4F7',
    },
    '& .MuiOutlinedInput-notchedOutline': {
        borderWidth: '0px',
        borderRadius: '100px',
    },
}));

export const EmailVerificationForm = () => {
    const [otp, setOtp] = useState('');

    const handleChange = (newValue: string) => {
        setOtp(newValue);
    };

    return (
        <VStack spacing={4}>
            <VStack spacing={1} alignItems={'center'}>
                <Typography variant="h4">Введите код</Typography>
                <Typography variant="body1" textAlign={'center'} color={'var(--tertiary-color-mono)'}>
                    Мы отправили код подтверждения по адресу bogdanbikaev@urfu.ru
                </Typography>
            </VStack>
            <StyledOtpInput
                value={otp}
                onChange={handleChange}
            />
        </VStack>
    );
};
