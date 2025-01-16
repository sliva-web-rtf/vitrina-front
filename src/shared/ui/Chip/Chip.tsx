'use client';

import { Chip, ChipProps, styled } from '@mui/material';

export const BaseChip = styled(Chip)<ChipProps>(() => ({
    '&.MuiChip-root': {
        backgroundColor: '#5C96FF',
        height: 49,
        maxWidth: '35%',
    },
    '& .MuiChip-label': {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 14,
        textTransform: 'lowercase',
    },
}));
