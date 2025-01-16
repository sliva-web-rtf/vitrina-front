'use client';

import { createTheme } from '@mui/material';
import { blue, blueGrey, green, grey, red } from '@mui/material/colors';
import { components } from './components';
import { typography } from './typography';

export const theme = createTheme({
    typography,
    components,
    palette: {
        background: {
            default: '#FFFFFF',
        },
        primary: {
            main: '#1166ee',
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
        fontSize: '3.5rem',
    },
    [theme.breakpoints.up('sm')]: {
        fontSize: '6rem',
    },
    [theme.breakpoints.up('lg')]: {
        fontSize: '10rem',
    },
    [theme.breakpoints.up('xl')]: {
        fontSize: '12rem',
    },
};

theme.typography.h2 = {
    ...theme.typography.h2,
    [theme.breakpoints.up('xs')]: {
        fontSize: '1.5rem',
    },
    [theme.breakpoints.up('sm')]: {
        fontSize: '2rem',
    },
    [theme.breakpoints.up('xl')]: {
        fontSize: '3rem',
    },
};

theme.typography.h3 = {
    ...theme.typography.h2,
    [theme.breakpoints.up('xs')]: {
        fontSize: '1.3rem',
    },
    [theme.breakpoints.up('sm')]: {
        fontSize: '1.5rem',
    },
    [theme.breakpoints.up('xl')]: {
        fontSize: '1.5rem',
    },
};

theme.typography.h4 = {
    ...theme.typography.h4,
    [theme.breakpoints.down('sm')]: {
        fontSize: '1rem',
    },
};
