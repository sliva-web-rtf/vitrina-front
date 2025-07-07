import React from 'react';
import { Controller, ControllerProps, FieldValues } from 'react-hook-form';
import { TextFieldProps } from '@mui/material';

import { FormSelect } from './FormSelect';
import { SelectOption } from '@/shared/lib/types/selectOption';

type ControlledFormSelectProps<T extends FieldValues> = Omit<ControllerProps<T>, 'render'> & {
    inputProps?: TextFieldProps;
    options: Array<SelectOption>;
};

export const ControlledFormSelect = <T extends FieldValues>(props: ControlledFormSelectProps<T>) => {
    const { inputProps, options, ...restProps } = props;

    return (
        <Controller
            {...restProps}
            render={({ field }) => <FormSelect {...field} {...inputProps} options={options} />}
        />
    );
};
