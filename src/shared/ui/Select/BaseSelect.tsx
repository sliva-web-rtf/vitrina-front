import { Box, CircularProgress, TextFieldProps } from '@mui/material';
import { memo } from 'react';
import { BaseField } from '../Field/BaseField';
import { SelectOption } from '@/shared/lib/types/selectOption';

type BaseSelectProps = TextFieldProps & {
    readonly loading?: boolean;
    readonly options?: Array<SelectOption>;
};

const LoadingAdornment = () => (
    <Box sx={{ position: 'absolute', right: 32 }}>
        <CircularProgress size={16} />
    </Box>
);

export const BaseSelect = memo((props: BaseSelectProps) => {
    const { options, label, loading, ...selectProps } = props;

    const endAdornment = loading ? <LoadingAdornment /> : null;

    return (
        <BaseField
            fullWidth
            select
            SelectProps={{
                native: true,
            }}
            sx={{
                minWidth: 120,
                '& .MuiSvgIcon-root': {
                    top: 'unset',
                },
            }}
            InputProps={{
                ...selectProps.InputProps,
                endAdornment,
            }}
            {...selectProps}
        >
            <option value="" disabled>
                {label}
            </option>
            {options?.map((option) => (
                <option key={option.value} value={option.value}>
                    {option.label}
                </option>
            ))}
        </BaseField>
    );
});

BaseSelect.displayName = 'BaseSelect';
