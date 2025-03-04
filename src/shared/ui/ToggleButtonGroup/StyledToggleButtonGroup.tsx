'use client';

import { styled, ToggleButtonGroup, toggleButtonGroupClasses } from '@mui/material';

export const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
    justifyContent: 'center',
    [`& .${toggleButtonGroupClasses.grouped}`]: {
        display: 'flex',
        width: 'calc((100% - var(--space-xl) * 2) / 3)',
        aspectRatio: 1.13,
        margin: theme.spacing(1),
        flexDirection: 'column',
        border: '1px solid var(--mono-border-color)',
        borderRadius: 'var(--border-radius)',
        gap: theme.spacing(1),
        [`& .${toggleButtonGroupClasses.disabled}`]: {
            border: 0,
        },
    },
    [`& .${toggleButtonGroupClasses.selected}`]: {
        color: 'var(--primary-color) !important',
        background: 'var(--blue-color-50) !important',
        borderColor: 'var(--primary-color)',
    },
}));
