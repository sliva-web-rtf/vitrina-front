import { Chip, ChipProps, styled } from '@mui/material';

export const BaseChip = styled(Chip)<ChipProps>(() => ({
    '&': {
        textTransform: 'none',
    },
}));
