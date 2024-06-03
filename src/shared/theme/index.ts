import { createTheme } from '@mui/material';
import { typography } from './typography';
import { blue, blueGrey, green, grey, red } from '@mui/material/colors';
import { components } from './components.ts';

// declare module '@mui/material/styles' {
//     interface BreakpointOverrides {
//         xs: false;
//         sm: false;
//         mobile: true;
//         tablet: true;
//         md: true;
//         lg: true;
//         xl: false;
//     }
// }

export const theme = createTheme({
    typography,
    components,
    // breakpoints: {
    //     values: {
    //         mobile: 320,
    //         tablet: 480,
    //         md: 700,
    //         lg: 1024,
    //     },
    // },
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
