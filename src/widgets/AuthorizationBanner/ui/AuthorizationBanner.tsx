import styles from './AuthorizationBanner.module.scss';

import React from 'react';
import { VStack } from '@/shared/ui';
import { Box, Typography } from '@mui/material';

export const AuthorizationBanner = () => {
    return (
        <Box className={styles['bannerBg']}>
            <VStack spacing={4}>
                <Typography variant="h2">Построй карьеру через свои проекты</Typography>
                <Typography>Публикуй работы, находи работодателей, делай шаг к успеху!</Typography>
            </VStack>
        </Box>
    );
};
