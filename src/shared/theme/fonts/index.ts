import { Roboto, Poppins, Manrope, Nunito } from 'next/font/google';

export const manrope = Manrope({
    weight: ['400', '500', '700', '800'],
    subsets: ['latin', 'cyrillic'],
    display: 'swap',
});

export const roboto = Roboto({
    subsets: ['latin', 'cyrillic'],
    weight: ['400', '500', '700'],
    variable: '--font-roboto',
    display: 'swap',
});

export const poppins = Poppins({
    subsets: ['latin'],
    weight: ['400', '600'],
    variable: '--font-poppins',
    display: 'swap',
});

export const nunito = Nunito({
    subsets: ['latin', 'cyrillic'],
    weight: ['400', '500', '700', '800'],
    variable: '--font-nunito',
    display: 'swap',
});
