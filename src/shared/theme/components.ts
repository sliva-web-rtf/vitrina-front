import { Components, Theme } from '@mui/material';

export const components: Components<Omit<Theme, 'components'>> | undefined = {
    MuiTextField: {
        styleOverrides: {
            root: {
                backgroundColor: '#fff',
                borderRadius: 'var(--space-l)',
                border: 'none',
            },
        },
    },
    MuiAvatar: {
        styleOverrides: {
            root: {
                color: '#AECBF5',
                backgroundColor: '#F2F4FE',
                '.MuiSvgIcon-root': {
                    width: '45%',
                    height: '45%',
                },
                border: '1px solid var(--border-color)',
                borderRadius: 'var(--space-m)',
            },
        },
    },
};
