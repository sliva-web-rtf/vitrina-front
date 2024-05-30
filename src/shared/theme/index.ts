import { createTheme } from '@mui/material'
import { typography } from './typography';


declare module "@mui/material/styles" {
  interface BreakpointOverrides {
    xs: false;
    sm: false;
    mobile: true;
    tablet: true;
    md: true;
    lg: true;
    xl: false;
  }
}

export const theme = createTheme({
  typography,
  breakpoints: {
    values: {
      mobile: 320,
      tablet: 480,
      md: 700,
      lg: 1024,
    },
  },
});