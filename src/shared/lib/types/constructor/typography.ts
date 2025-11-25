import { TypographyProps } from '@mui/material/Typography';

export type TypographyVariant = TypographyProps['variant'];

export type TextWithVariant = {
    text: string;
    variant: TypographyVariant;
};
