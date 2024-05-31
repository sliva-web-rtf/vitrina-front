import { styled, TextField, TextFieldProps } from '@mui/material';

export const BaseField = styled(TextField)<TextFieldProps>(() => ({
    '& .MuiInputBase-root ': {
        paddingBottom: 10,
    },
}));
