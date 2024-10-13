'use client';

import { theme } from '@/shared/theme';
import { styled, ToggleButton, ToggleButtonGroup, ToggleButtonGroupProps, ToggleButtonProps } from '@mui/material';

export const BaseToggleButton = styled(ToggleButton)<ToggleButtonProps>(({ theme }) => ({
    '&': {
        border: 0,
        borderRadius: '100px',
        minWidth: 80,
        fontWeight: 700,
        textTransform: 'none',
        color: theme.palette.primary.main,
    },
    '&.Mui-selected': {
        color: theme.palette.background.default,
        backgroundColor: theme.palette.primary.main,
    },
    '&.MuiToggleButtonGroup-firstButton': {
        borderTopRightRadius: '100px',
        borderBottomRightRadius: '100px',
    },
    '&.MuiToggleButtonGroup-lastButton': {
        borderTopLeftRadius: '100px',
        borderBottomLeftRadius: '100px',
    },
}));

export const BaseToggleButtonGroup = styled(ToggleButtonGroup)<ToggleButtonGroupProps>(() => ({
    '&': {
        columnGap: theme.spacing(1),
        borderRadius: '1000px',
        background: theme.palette.secondary.light,
        padding: theme.spacing(1),
    },
}));
