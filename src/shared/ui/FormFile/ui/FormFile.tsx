import React, { ReactNode } from 'react';
import { BaseButton } from '../../Button/BaseButton';
import { styled, Typography } from '@mui/material';

import AttachFileIcon from '@mui/icons-material/AttachFile';

const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
});

export const FormFile = ({ children }: { children?: ReactNode }) => {
    return (
        <BaseButton
            component="label"
            role={undefined}
            sx={{ justifyContent: 'start', color: 'var(--tertiary-color-mono)', backgroundColor: '#F2F4F7' }}
        >
            <AttachFileIcon />
            <Typography variant="body1" textAlign="start">
                {children}
            </Typography>
            <VisuallyHiddenInput type="file" onChange={(event) => console.log(event.target.files)} />
        </BaseButton>
    );
};
