import React, { ReactNode } from 'react';
import { Accordion as AccordionBase, AccordionDetails, AccordionSummary, Typography } from '@mui/material';

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
                <Typography component="span" sx={{ fontSize: '32px', fontWeight: 700 }}>
                    {label}
                </Typography>
            </AccordionSummary>
            <AccordionDetails>{children}</AccordionDetails>
        </AccordionBase>
    );
};
