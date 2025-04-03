'use client';

import { styled, TextField, TextFieldProps } from '@mui/material';

export const FormField = styled(TextField)<TextFieldProps>(({ theme }) => ({
    width: 'auto !important',
    '& .MuiInputBase-root': {
        marginTop: theme.spacing(3),
        padding: '8px 16px',
        backgroundColor: '#F2F4F7',
        borderRadius: '100px',
        transition: 'background 100ms ease-out, outline 100ms ease-out',
    },
    '& .MuiInputBase-input': {
        width: '100%',
        padding: 0,
    },
    '& .MuiInputBase-root:hover': {
        background: 'none',
        outline: '2px solid #3F72E0',
        transition: 'background 100ms ease-out, outline 100ms ease-out',
    },
    '& .MuiInput-root.Mui-error': {
        outline: '2px solid red',
        transition: 'outline 100ms ease-out',
    },
    '& .MuiOutlinedInput-notchedOutline': {
        border: 'none',
    },
}));
