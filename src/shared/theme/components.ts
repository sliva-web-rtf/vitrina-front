import { Components, Theme } from '@mui/material';

export const components: Components<Omit<Theme, 'components'>> | undefined = {
    MuiTextField: {
        defaultProps: {
            variant: 'standard',
        },
    },
    MuiAvatar: {
        styleOverrides: {
            root: {
                color: '#AECBF5',
                backgroundColor: '#E7F0FF',
                '.MuiSvgIcon-root': {
                    width: '45%',
                    height: '45%',
                },
            },
        },
    },
};
