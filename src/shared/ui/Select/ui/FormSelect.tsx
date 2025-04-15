import { SelectOption } from '@/shared/lib/types/selectOption';
import { TextFieldProps, Box, CircularProgress } from '@mui/material';
import React, { memo } from 'react';
import { FormField } from '../../Field/FormField';

type BaseSelectProps = TextFieldProps & {
    readonly loading?: boolean;
    readonly options?: Array<SelectOption>;
};

const LoadingAdornment = () => (
    <Box sx={{ position: 'relative', right: 32 }}>
        <CircularProgress size={16} />
    </Box>
);

export const FormSelect = memo((props: BaseSelectProps) => {
    const { options, label, loading, ...selectProps } = props;

    const endAdornment = loading ? <LoadingAdornment /> : null;

    return (
        <FormField
            select
            SelectProps={{
                native: true,
            }}
            sx={(theme) => ({
                position: 'relative',
                width: 250,
                '& .MuiSvgIcon-root': {
                    top: 'unset',
                },

                [theme.breakpoints.down('lg')]: {
                    width: '100%',
                },
            })}
            InputProps={{
                ...selectProps.InputProps,
                endAdornment,
            }}
            {...selectProps}
        >
            <option value="">{label}</option>
            {options?.map((option) => (
                <option key={option.value} value={option.value}>
                    {option.label}
                </option>
            ))}
        </FormField>
    );
});

FormSelect.displayName = 'BaseSelect';
