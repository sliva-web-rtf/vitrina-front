import React from 'react';
import { ToggleButton, Typography } from '@mui/material';
import HandshakeIcon from '@mui/icons-material/Handshake';
import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded';
import PersonIcon from '@mui/icons-material/Person';
import { Control, Controller, FieldErrors } from 'react-hook-form';

import { VStack } from '@/shared/ui';
import { StyledToggleButtonGroup } from '@/shared/ui/ToggleButtonGroup/StyledToggleButtonGroup';
import { SignUpFormData } from '../model/types/SignUpFormData';
import { Roles } from '../model/types/Roles';

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
                        <ToggleButton value={Roles.student}>
                            <SchoolRoundedIcon />
                            <Typography variant="subtitle2">Студент</Typography>
                        </ToggleButton>
                        <ToggleButton value={Roles.teacher}>
                            <PersonIcon />
                            <Typography variant="subtitle2">Куратор</Typography>
                        </ToggleButton>
                        <ToggleButton value={Roles.partner}>
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
