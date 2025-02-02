import styles from './ExpertsShowcase.module.scss';

import React from 'react';
import { Box, Grid, Typography } from '@mui/material';

import { VStack } from '@/shared/ui';

import { TEST_EXPERTS } from '../model/types/Expert';
import { ExpertCard } from './ExpertCard';

export const ExpertsShowcase = () => {
    return (
        <VStack spacing={8} className={styles['showcase']}>
            <Typography variant="h2" textAlign="center" color={'var(--primary-color-mono)'}>
                <span>Наши эксперты</span> - источник знаний и вдохновения для молодых специалистов. Спасибо за ваш
                труд!
            </Typography>
            <Box flexGrow={1}>
                <Grid container spacing={2} alignItems="end">
                    {TEST_EXPERTS.map((item) => (
                        <Grid key={item.id} item xs={6} md={4} lg={3} xl={2}>
                            <ExpertCard expert={item} />
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </VStack>
    );
};
