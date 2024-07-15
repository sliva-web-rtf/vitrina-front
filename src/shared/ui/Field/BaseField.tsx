'use client';

import { styled, TextField, TextFieldProps } from '@mui/material';

export const BaseField = styled(TextField)<TextFieldProps>(() => ({
    '& .MuiInputBase-root ': {
        paddingBottom: 10,
    },
    '& .Mui-disabled': {
        color: 'green',
    },
}));
