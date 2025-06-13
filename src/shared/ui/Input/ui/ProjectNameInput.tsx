'use client';

import React, { useEffect, useRef, useState } from 'react';
import { styled, TextField, TextFieldProps } from '@mui/material';

const ForwardedProjectNameInput = React.forwardRef<HTMLDivElement, TextFieldProps>((props, ref) => {
    const [inputWidth, setInputWidth] = useState(0);
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    useEffect(() => {
        if (!canvasRef.current) {
            canvasRef.current = document.createElement('canvas');
        }

        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');

        if (context) {
            const font = getComputedStyle(document.body).font;
            context.font = font;
            const text = props.value?.toString() || '';
            const textWidth = context.measureText(text).width;

            setInputWidth(textWidth + 5);
        }
    }, [props.value]);

    return (
        <TextField
            {...props}
            inputProps={{
                style: { width: `${inputWidth}px` },
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
