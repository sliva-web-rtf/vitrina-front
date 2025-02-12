'use client';

import styles from './Accordion.module.scss';

import React, { ReactNode, useState } from 'react';
import { Accordion as AccordionBase, AccordionDetails, AccordionSummary, Box, Typography } from '@mui/material';

import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
import RemoveCircleOutlinedIcon from '@mui/icons-material/RemoveCircleOutlined';

interface AccordionProps {
    label: string;
    children: ReactNode;
}

export const Accordion = (props: AccordionProps) => {
    const { label, children } = props;
    const [expanded, setExpanded] = useState<boolean>(false);

    const handleExpand = () => {
        setExpanded(!expanded);
    };

    return (
        <AccordionBase expanded={expanded} onChange={handleExpand} className={styles['base']}>
            <AccordionSummary
                expandIcon={
                    expanded ? (
                        <RemoveCircleOutlinedIcon className={styles['expandIcon']} />
                    ) : (
                        <AddCircleOutlinedIcon className={styles['expandIcon']} />
                    )
                }
                className={styles['summary']}
            >
                <Typography component="span" variant="h3">
                    {label}
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Box className={styles['detailsContent']}>{children}</Box>
            </AccordionDetails>
        </AccordionBase>
    );
};
