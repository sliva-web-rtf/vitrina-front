import { Typography } from '@mui/material';
import { ReactNode } from 'react';
import { VStack } from '../Stack/Stack';
import styles from './DetailsBlock.module.scss';

interface DetailsBlockProps {
    title: string;

    text?: string;
    anchor?: string;
    children?: ReactNode;
    noBackground?: boolean;
    noPadding?: boolean;
}

export const DetailsBlock = (props: DetailsBlockProps) => {
    const { anchor, title, text, children, noBackground = false, noPadding = false } = props;

    return (
        <VStack id={anchor} spacing={2} p={noPadding ? 0 : 4} className={noBackground ? '' : styles.container}>
            <Typography variant="h3">{title}</Typography>
            <Typography>{text}</Typography>
            {children}
        </VStack>
    );
};
