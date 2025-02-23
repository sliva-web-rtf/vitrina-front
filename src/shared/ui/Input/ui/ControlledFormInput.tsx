import React from 'react';
import { Controller, ControllerProps, FieldValues } from 'react-hook-form';
import { TextFieldProps } from '@mui/material';

import { FormInput } from './FormInput';

type ControlledFormInputProps<T extends FieldValues> = Omit<ControllerProps<T>, 'render'> & {
    inputProps: TextFieldProps;
};

export const ControlledFormInput = <T extends FieldValues>(props: ControlledFormInputProps<T>) => {
    const { inputProps, ...restProps } = props;

    return <Controller {...restProps} render={({ field }) => <FormInput {...field} {...inputProps} />} />;
};
