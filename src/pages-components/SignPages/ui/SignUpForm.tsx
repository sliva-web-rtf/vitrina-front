'use client';

import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Box, Typography } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';

import { BaseButton, HStack, VStack } from '@/shared/ui';
import { RegularLink } from '@/shared/ui/Link';
import { getSignUpStep, SignUpContext, SignUpFormData, SignUpFormDataToSchemaMapper } from '../model';
import { useLazySignUpQuery, useLazyConfirmQuery } from '../api/signApi';

import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';

const FORM_DEFAULT: Omit<SignUpFormData, 'role'> = {
    email: '',
    firstName: '',
    lastName: '',
    surname: '',
    password: '',
    passwordConfirm: '',
    companyName: '',
    companyPosition: '',
    educationCourse: '',
    teamRole: '',
    educationLevel: '',
    confirmationCode: '',
};

export const SignUpForm = () => {
    const context = useContext(SignUpContext);
    if (!context) throw new Error('SignUpForm must be provided with SignUpContextProvider');

    const { currentStep, changeCurrentStep } = context;
    const [formData, setFormData] = useState<SignUpFormData>();
    const [PostSignUp, { isFetching: signUpIsFetching, data: signUpData }] = useLazySignUpQuery();
    const [PostConfirm, { isFetching: confirmIsFetching, data: confirmData }] = useLazyConfirmQuery();

    const {
        handleSubmit,
        control,
        formState: { errors },
        setError,
    } = useForm<SignUpFormData>({ defaultValues: FORM_DEFAULT });

    const onSubmit = (data: SignUpFormData) => {
        setFormData(data);

        if (currentStep === 1) {
            if (data.password !== data.passwordConfirm) {
                setError('passwordConfirm', { type: 'validate', message: 'Пароли должны совпадать' });
                return;
            }
        }

        if (currentStep === 2) {
            PostSignUp(SignUpFormDataToSchemaMapper(data));
        }

        try {
            changeCurrentStep(currentStep + 1);
        } catch (error) {
            if (error instanceof RangeError) {
                const numberUserId = Number(signUpData?.userId);
                const numberConfirmationCode = Number(data.confirmationCode);

                if (!numberUserId || !numberConfirmationCode)
                    throw new Error('userId and confirmationCode must be a numbers');

                PostConfirm({ userId: numberUserId, confirmationCode: numberConfirmationCode });
            }
        }
    };

    if (signUpIsFetching || confirmIsFetching) return <CircularProgress />;

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
