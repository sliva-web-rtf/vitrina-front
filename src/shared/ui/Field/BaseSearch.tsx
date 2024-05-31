import { BaseField } from './BaseField.tsx';
import { InputAdornment, TextFieldProps } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

export const BaseSearch = (props: Omit<TextFieldProps, 'label'>) => (
    <BaseField
        autoComplete="off"
        InputProps={{
            startAdornment: (
                <InputAdornment position="start">
                    <SearchIcon />
                </InputAdornment>
            ),
        }}
        {...props}
    />
);
