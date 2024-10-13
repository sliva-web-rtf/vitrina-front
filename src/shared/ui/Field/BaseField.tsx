'use client';

import { styled, TextField, TextFieldProps } from '@mui/material';

export const BaseField = styled(TextField)<TextFieldProps>(() => ({
    '& .MuiInputBase-root': {
        borderRadius: 'var(--space-l)',
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            border: 'none',
        },
    },
    '& .Mui-disabled': {
        color: 'grey',
    },
}));
