'use client';

import React, { ReactNode } from 'react';
import { Box, Typography } from '@mui/material';
import { VStack } from '../Stack/Stack';

interface DashboardBlockProps {
    title: string;
    subtitle?: ReactNode;
    children?: ReactNode;
}

export const DashboardBlock = (props: DashboardBlockProps) => {
    const { title, subtitle, children } = props;

    return (
        <Box sx={{ margin: '0 auto', maxWidth: '1544px' }}>
            <VStack
                spacing={4}
                sx={(theme) => ({
                    marginBottom: '96px',
                    [theme.breakpoints.down('lg')]: {
                        marginBottom: '32px',
                    },
                })}
            >
                <Typography variant="h2">{title}</Typography>
                {subtitle && (
                    <Typography
                        sx={(theme) => ({
                            fontSize: '32px',
                            [theme.breakpoints.down('xl')]: {
                                fontSize: '22px',
                            },
                            [theme.breakpoints.down('sm')]: {
                                fontSize: '16px',
                            },
                        })}
                    >
                        {subtitle}
                    </Typography>
                )}
            </VStack>
            <Box>{children}</Box>
        </Box>
    );
};
