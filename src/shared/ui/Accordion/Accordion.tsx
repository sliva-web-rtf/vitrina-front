'use client';

import React, { ReactNode } from 'react';
import { Accordion as AccordionBase, AccordionDetails, AccordionSummary, Box, Typography } from '@mui/material';

import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';

interface AccordionProps {
    label: string;
    children: ReactNode;
}

export const Accordion = (props: AccordionProps) => {
    const { label, children } = props;

    return (
        <AccordionBase
            sx={{
                background: 'none',
                borderBottom: '1px solid var(--primary-color-90)',
                boxShadow: 'none',
            }}
        >
            <AccordionSummary
                expandIcon={
                    <AddCircleOutlinedIcon sx={{ width: '56px', height: '56px', color: 'var(--primary-color)' }} />
                }
                aria-controls="panel1-content"
                id="panel1-header"
                sx={{ padding: '16px 24px', border: 'none' }}
            >
                <Typography
                    component="span"
                    sx={(theme) => ({
                        fontSize: '32px',
                        fontWeight: 700,
                        [theme.breakpoints.down('xl')]: {
                            fontSize: '28px',
                        },
                        [theme.breakpoints.down('sm')]: {
                            fontSize: '24px',
                        },
                    })}
                >
                    {label}
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Box
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
                    {children}
                </Box>
            </AccordionDetails>
        </AccordionBase>
    );
};
