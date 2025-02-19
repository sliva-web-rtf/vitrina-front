import { styled, TextField, TextFieldProps } from '@mui/material';
import React from 'react';

const ForwarderFormInput = React.forwardRef<HTMLDivElement, TextFieldProps>((props, ref) => (
    <TextField
        {...props}
        ref={ref}
        variant="standard"
        InputLabelProps={{ shrink: true }}
        InputProps={{ ...props.InputProps, disableUnderline: true }}
    />
));

ForwarderFormInput.displayName = 'FormInput';

const StyledFormInput = styled(ForwarderFormInput)(({ theme }) => ({
    '& .MuiInput-root': {
        marginTop: theme.spacing(3),
        padding: '8px 16px',
        backgroundColor: '#F2F4F7',
        borderRadius: '100px',
        transition: 'background 100ms ease-out, outline 100ms ease-out',
    },
    '& .MuiInput-root:hover': {
        background: 'none',
        outline: '2px solid #3F72E0',
        transition: 'background 100ms ease-out, outline 100ms ease-out',
    },
    '& .MuiInput-root.Mui-error': {
        outline: '2px solid red',
        transition: 'outline 100ms ease-out',
    },
}));

export { StyledFormInput as FormInput };
