'use client';

import React, { useState } from 'react';
import { Box, IconButton, InputAdornment, Typography, Button } from '@mui/material';
import { useForm } from 'react-hook-form';

import { RegularLink } from '@/shared/ui/Link';
import { VStack, BaseButton, HStack } from '@/shared/ui';
import { ControlledFormInput } from '@/shared/ui/Input';
import { SignInFormData } from '../model';
import { useLazySignInQuery } from '../api/signApi';

import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const FORM_DEFAULTS: SignInFormData = {
    email: '',
    password: '',
};

export const SignInForm = () => {
    const {
        handleSubmit,
        control,
        formState: { errors },
        setError,
    } = useForm<SignInFormData>({ defaultValues: FORM_DEFAULTS });

    const [PostSignIn, { isFetching, data }] = useLazySignInQuery();

    const [passwordVisible, setPasswordVisible] = useState<boolean>(false);

    const onSubmit = async (data: SignInFormData) => {
        try {
            const res = await PostSignIn({ ...data, rememberMe: true });
        } catch {
            setError('root', { message: 'Произошла ошибка. Попробуйте позже' });
        }
    };

    return (
        <Box component="form" onSubmit={handleSubmit(onSubmit)}>
            <VStack spacing={4}>
                <VStack spacing={3}>
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
                            type: 'text',
                            label: 'Почта*',
                            placeholder: 'bogdanbikaev@urfu.me',
                            error: Boolean(errors.email),
                        }}
                    />
                    <ControlledFormInput
                        control={control}
                        name="password"
                        rules={{ required: true }}
                        inputProps={{
                            type: passwordVisible ? 'text' : 'password',
                            label: 'Пароль*',
                            placeholder: 'Введите пароль',
                            error: Boolean(errors.password),
                            InputProps: {
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton onClick={() => setPasswordVisible(!passwordVisible)}>
                                            {passwordVisible ? <VisibilityOffIcon /> : <VisibilityIcon />}
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            },
                        }}
                    />
                    {errors.root && (
                        <Typography color="error" textAlign="center">
                            {errors.root.message}
                        </Typography>
                    )}
                    <RegularLink href={'#'}>Забыли пароль?</RegularLink>
                </VStack>
                <VStack spacing={3}>
                    <BaseButton type="submit" variant="contained" endIcon={<ArrowForwardRoundedIcon />}>
                        <Typography variant="subtitle1">Продолжить</Typography>
                    </BaseButton>
                    <HStack spacing={0.5} alignSelf="center">
                        <Typography>Нет аккаунта?</Typography>
                        <RegularLink href={'/signup'}>Регистрация</RegularLink>
                    </HStack>
                </VStack>
            </VStack>
        </Box>
    );
};
