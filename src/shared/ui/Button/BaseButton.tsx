import { Button, ButtonProps, styled } from '@mui/material';

export const BaseButton = styled(Button)<ButtonProps>(() => ({
    '&': {
        textTransform: 'none',
    },
}));
