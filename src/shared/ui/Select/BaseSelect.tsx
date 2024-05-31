import { TextFieldProps } from '@mui/material';
import { memo } from 'react';
import { BaseField } from '../Field/BaseField';

type BaseSelectProps = TextFieldProps & {
    readonly options: Array<string>;
    readonly control?: never;
};

export const BaseSelect = memo((props: BaseSelectProps) => {
    const { options, label, ...selectProps } = props;
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
            {...selectProps}
        >
            <option value="" disabled>
                {label}
            </option>
            {options.map((option) => (
                <option key={option} value={option}>
                    {option}
                </option>
            ))}
        </BaseField>
    );
});
