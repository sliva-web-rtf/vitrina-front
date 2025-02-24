import React, { useState } from 'react';
import { InputAdornment, IconButton, Typography } from '@mui/material';
import { Control, FieldErrors } from 'react-hook-form';

import { VStack } from '@/shared/ui';
import { ControlledFormInput } from '@/shared/ui/Input';
import { SignUpFormData } from '../model';

import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

export const SignUpMainStep = ({
    control,
    errors,
}: {
    control: Control<SignUpFormData, any>;
    errors: FieldErrors<SignUpFormData>;
}) => {
    const [passwordVisible, setPasswordVisible] = useState<boolean>(false);
    return (
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
                    type: 'email',
                    label: 'Почта*',
                    placeholder: 'bogdanbikaev@urfu.me',
                    error: Boolean(errors.email),
                }}
            />
            <ControlledFormInput
                control={control}
                name="password"
                rules={{
                    required: true,
                }}
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
            <ControlledFormInput
                control={control}
                name="passwordConfirm"
                rules={{ required: true }}
                inputProps={{
                    type: passwordVisible ? 'text' : 'password',
                    label: 'Повторите пароль*',
                    placeholder: 'Введите пароль',
                    error: Boolean(errors.passwordConfirm),
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
            {errors.passwordConfirm && <Typography color="error">{errors.passwordConfirm.message}</Typography>}
        </VStack>
    );
};
