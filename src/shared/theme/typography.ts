import { Palette } from '@mui/material';
import { TypographyOptions } from '@mui/material/styles/createTypography';

export const typography: TypographyOptions | ((palette: Palette) => TypographyOptions) | undefined = {
    fontFamily: ['Manrope', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'].join(','),
    h1: {
        fontWeight: 800,
        lineHeight: 0.9,
    },
    h2: {
        fontWeight: 800,
        lineHeight: 1,
    },
    h3: {
        fontSize: 24,
        fontWeight: 600,
    },
    h4: {
        fontSize: 20,
        fontWeight: 500,
    },
    h5: {
        fontSize: 18,
        fontWeight: 600,
    },
    subtitle1: {
        fontSize: 14,
        fontWeight: 500,
        lineHeight: 1.2,
    },
    subtitle2: {
        fontSize: 16,
        fontWeight: 500,
        lineHeight: 1.2,
    },
    body1: {
        fontSize: 16,
        fontWeight: 500,
        lineHeight: 1.4,
    },
    body2: {
        fontSize: 16,
        fontWeight: 400,
        lineHeight: 1.2,
    },
};
