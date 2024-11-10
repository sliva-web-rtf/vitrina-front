import SearchIcon from '@mui/icons-material/Search';
import { InputAdornment, TextFieldProps } from '@mui/material';
import { BaseField } from './BaseField';

export const BaseSearch = (props: Omit<TextFieldProps, 'label'>) => (
    <BaseField
        autoComplete="off"
        InputProps={{
            endAdornment: (
                <InputAdornment position="end">
                    <SearchIcon />
                </InputAdornment>
            ),
        }}
        sx={(theme) => ({
            width: '100%',
            maxWidth: 500,

            [theme.breakpoints.down('lg')]: {
                maxWidth: 'unset',
            },
        })}
        {...props}
    />
);
