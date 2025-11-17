'use client';

import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Box, Typography } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import { useRouter } from 'next/navigation';

import { BaseButton, HStack, VStack } from '@/shared/ui';
import { RegularLink } from '@/shared/ui/Link';
import { getSignUpStep } from '../model/signUpStepsHandler';
import { SignUpContext } from '../model/contexts/signUpContext';
import { SignUpFormData } from '../model/types/SignUpFormData';
import { SignUpFormDataToSchemaMapper } from '../model/types/mappers/SignUpMapper';
import { useLazySignUpQuery, useLazyConfirmQuery } from '../api/SignUpApi';

import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import { useDispatch } from 'react-redux';
import { setToken } from '@/entities/user';

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
    const [PostSignUp, { isFetching: signUpIsFetching, data: signUpData, error: signUpError }] = useLazySignUpQuery();
    const [
        PostConfirm,
        { isFetching: confirmIsFetching, data: confirmData, error: PostConfirmError },
        ConfirmIsSuccess,
    ] = useLazyConfirmQuery();
    const router = useRouter();
    const dispatch = useDispatch();

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

    useEffect(() => {
        if (ConfirmIsSuccess && confirmData) {
            dispatch(setToken(confirmData.token));
            router.push('/');
        }
    }, [confirmData, ConfirmIsSuccess, dispatch, router]);

    if (signUpIsFetching || confirmIsFetching) return <CircularProgress />;

    if (signUpError || PostConfirmError) {
        return (
            <Typography color="error">Произошла ошибка при выполнении запроса. Пожалуйста повторите попытку</Typography>
        );
    }

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
