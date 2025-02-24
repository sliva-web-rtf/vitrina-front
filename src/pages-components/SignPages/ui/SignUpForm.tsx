'use client';

import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Box, Typography } from '@mui/material';

import { BaseButton, HStack, VStack } from '@/shared/ui';
import { RegularLink } from '@/shared/ui/Link';
import { getSignUpStep, SignUpContext, SignUpFormData } from '../model';

import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';

export const SignUpForm = () => {
    const context = useContext(SignUpContext);
    if (!context) throw new Error('SignUpForm must be provided with SignUpContext provider');

    const { currentStep, changeCurrentStep } = context;
    const [formData, setFormData] = useState<SignUpFormData>();

    const {
        handleSubmit,
        control,
        formState: { errors },
        setError,
    } = useForm<SignUpFormData>();

    const onSubmit = (data: SignUpFormData) => {
        setFormData(data);

        if (currentStep === 1) {
            if (data.password !== data.passwordConfirm) {
                setError('passwordConfirm', { type: 'validate', message: 'Пароли должны совпадать' });
                return;
            }
        }

        try {
            changeCurrentStep(currentStep + 1);
        } catch (error) {
            if (error instanceof RangeError) {
                alert(`Форма потдверждена\n${JSON.stringify(data)}`);
            }
        }
    };

    return (
        <Box component="form" onSubmit={handleSubmit(onSubmit)}>
            <VStack spacing={4}>
                {getSignUpStep(currentStep, control, errors, formData!)}
                <VStack spacing={3}>
                    <BaseButton type="submit" variant="contained" endIcon={<ArrowForwardRoundedIcon />}>
                        <Typography variant="subtitle1">Продолжить</Typography>
                    </BaseButton>
                    <HStack spacing={0.5} alignSelf={'center'}>
                        <Typography>Уже есть аккаунт?</Typography>
                        <RegularLink href={'/signin'}>Войти</RegularLink>
                    </HStack>
                </VStack>
            </VStack>
        </Box>
    );
};
