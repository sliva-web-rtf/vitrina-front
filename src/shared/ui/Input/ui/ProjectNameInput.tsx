'use client';

import { styled, TextField, TextFieldProps } from '@mui/material';
import React, { useEffect, useMemo, useState } from 'react';

const ForwardedProjectNameInput = React.forwardRef<HTMLDivElement, TextFieldProps>((props, ref) => {
    const inputWidth = useMemo(() => {
        const valueLength = props.value?.toString().length || 0;
        const placeholderLength = props.placeholder?.toString().length || 0;

        return Math.max(valueLength, placeholderLength);
    }, [props]);

    return (
        <TextField
            {...props}
            inputProps={{
                style: { width: `${inputWidth}ch` },
            }}
            ref={ref}
        />
    );
});

ForwardedProjectNameInput.displayName = 'ProjectNameInput';

const StyledProjectNameInput = styled(ForwardedProjectNameInput)(({ theme }) => ({
    '& .MuiOutlinedInput-root': {
        height: '100%',
        borderRadius: '6px',
    },
    '&:hover .MuiOutlinedInput-notchedOutline': {
        border: `1px solid var(--mono-border-color) !important`,
    },
    '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
        border: `1px solid var(--primary-color) !important`,
    },
    '& .MuiOutlinedInput-notchedOutline': {
        border: 'none !important',
    },
    '& .MuiOutlinedInput-input': {
        height: '100%',
        padding: `${theme.spacing(0.5)} ${theme.spacing(1)}`,
    },
}));

export { StyledProjectNameInput as ProjectNameInput };
