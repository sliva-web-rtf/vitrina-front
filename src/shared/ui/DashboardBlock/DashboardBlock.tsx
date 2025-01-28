'use client';

import React, { ReactNode } from 'react';
import { Box, Typography } from '@mui/material';
import { VStack } from '../Stack/Stack';

interface DashboardBlockProps {
    title: string;
    subtitle?: ReactNode | string;
    children?: ReactNode;
}

export const DashboardBlock = (props: DashboardBlockProps) => {
    const { title, subtitle, children } = props;

    const getSubtitle = () => {
        if (!subtitle) {
            return;
        }

        if (typeof subtitle === 'string') {
            return <Typography>{subtitle}</Typography>;
        }

        return subtitle;
    };

    return (
        <Box sx={{ margin: '0 auto', maxWidth: '1544px' }}>
            <VStack
                spacing={4}
                sx={(theme) => ({
                    marginBottom: '32px',
                    [theme.breakpoints.down('lg')]: {
                        marginBottom: '32px',
                    },
                })}
            >
                <Typography variant="h3">{title}</Typography>
                {getSubtitle()}
            </VStack>
            <Box>{children}</Box>
        </Box>
    );
};
