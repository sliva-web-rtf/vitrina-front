import { Palette } from '@mui/material';
import { TypographyOptions } from '@mui/material/styles/createTypography';

export const typography: TypographyOptions | ((palette: Palette) => TypographyOptions) | undefined = {
    fontFamily: ["Manrope", "Roboto", "Helvetica", "Arial", "sans-serif"].join(','),
    h1: {
      fontWeight: 700,
      lineHeight: 0.9,
  },
};