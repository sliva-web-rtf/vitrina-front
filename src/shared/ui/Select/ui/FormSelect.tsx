import { SelectOption } from '@/shared/lib/types/selectOption';
import { TextFieldProps, Box, CircularProgress, styled } from '@mui/material';
import React, { memo } from 'react';
import { FormField } from '../../Field/FormField';

type BaseSelectProps = TextFieldProps & {
    readonly options?: Array<SelectOption>;
};

const MemoFormSelect = memo((props: BaseSelectProps) => {
    const { options, label, ...selectProps } = props;

    return (
        <FormField
            select
            SelectProps={{
                native: true,
            }}
            InputProps={selectProps.InputProps}
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

const ForwardedFormSelect = React.forwardRef<HTMLDivElement, BaseSelectProps>((props, ref) => {
    const { options, label, ...selectProps } = props;

    return (
        <FormField
            select
            SelectProps={{
                native: true,
            }}
            InputProps={selectProps.InputProps}
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

const StyledFormSelect = styled(ForwardedFormSelect)(({ theme }) => ({
    position: 'relative',
    '& .MuiInputBase-root': {
        padding: '12.5px 16px',
    },
    '& .MuiSvgIcon-root': {
        top: 'unset',
    },
    '& .MuiTextField-root': {
        width: 'auto',
    },
}));

MemoFormSelect.displayName = 'BaseSelect';
ForwardedFormSelect.displayName = 'BaseSelect';

export { StyledFormSelect as FormSelect };
