import { createTheme } from '@mui/material';
import { typography } from './typography';
import { blue, blueGrey, green, grey, red } from '@mui/material/colors';
import { components } from './components.ts';

export const theme = createTheme({
    typography,
    components,
    palette: {
        background: {
            default: '#F5F5F5',
        },
        primary: {
            main: blue['600'],
            light: blue['200'],
        },
        secondary: {
            main: grey['500'],
            light: blueGrey['50'],
        },
        error: {
            main: red['500'],
        },
        success: {
            main: green['500'],
            light: green.A100,
        },
    },
});

theme.typography.h1 = {
    ...theme.typography.h1,
    [theme.breakpoints.up('xs')]: {
        fontSize: 32,
    },
    [theme.breakpoints.up('sm')]: {
        fontSize: 48,
    },
    [theme.breakpoints.up('lg')]: {
        fontSize: 64,
    },
    [theme.breakpoints.up('xl')]: {
        fontSize: 96,
    },
};

theme.typography.h2 = {
    ...theme.typography.h2,
    [theme.breakpoints.up('xs')]: {
        fontSize: 32,
    },
    [theme.breakpoints.up('sm')]: {
        fontSize: 40,
    },
    [theme.breakpoints.up('xl')]: {
        fontSize: 52,
    },
};
