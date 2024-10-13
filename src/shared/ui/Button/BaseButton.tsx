'use client';

import { Button, ButtonProps, styled } from '@mui/material';

export const BaseButton = styled(Button)<ButtonProps>(({ theme }) => ({
    '&': {
        textTransform: 'none',
        borderRadius: '100px',
        padding: [theme.spacing(2), theme.spacing(3)].join(' '),
    },
}));
