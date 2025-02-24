import React from 'react';
import { styled, ToggleButton, ToggleButtonGroup, toggleButtonGroupClasses, Typography } from '@mui/material';
import HandshakeIcon from '@mui/icons-material/Handshake';
import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded';
import PersonIcon from '@mui/icons-material/Person';
import { Control, Controller, FieldErrors } from 'react-hook-form';

import { VStack } from '@/shared/ui';
import { SignUpFormData } from '../model';

const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
    justifyContent: 'center',
    [`& .${toggleButtonGroupClasses.grouped}`]: {
        display: 'flex',
        width: "calc((100% - var(--space-xl) * 2) / 3)",
        aspectRatio: 1.13,
        margin: theme.spacing(1),
        flexDirection: 'column',
        border: '1px solid var(--mono-border-color)',
        borderRadius: 'var(--border-radius)',
        gap: theme.spacing(1),
        [`& .${toggleButtonGroupClasses.disabled}`]: {
            border: 0,
        },
    },
    [`& .${toggleButtonGroupClasses.selected}`]: {
        color: 'var(--primary-color) !important',
        background: 'var(--blue-color-50) !important',
        borderColor: 'var(--primary-color)',
    },
}));

interface SignUpRoleSelectorProps {
    control: Control<SignUpFormData, any>;
    errors: FieldErrors<SignUpFormData>;
}

export const SignUpRoleSelector = (props: SignUpRoleSelectorProps) => {
    const { control, errors } = props;

    return (
        <Controller
            name="role"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
                <VStack spacing={1}>
                    <Typography color={'var(--tertiary-color-mono)'} variant="subtitle2">
                        Для начала, выберите Вашу роль.
                    </Typography>
                    <StyledToggleButtonGroup
                        {...field}
                        exclusive
                        onChange={(_, newAlignment) => {
                            field.onChange(newAlignment);
                        }}
                    >
                        <ToggleButton value="student">
                            <SchoolRoundedIcon />
                            <Typography variant="subtitle2">Студент</Typography>
                        </ToggleButton>
                        <ToggleButton value="teacher">
                            <PersonIcon />
                            <Typography variant="subtitle2">Куратор</Typography>
                        </ToggleButton>
                        <ToggleButton value="partner">
                            <HandshakeIcon />
                            <Typography variant="subtitle2">Партнер</Typography>
                        </ToggleButton>
                    </StyledToggleButtonGroup>
                    {errors.role && <Typography color="error">Выберите роль!</Typography>}
                </VStack>
            )}
        />
    );
};
