import styles from './ExpertsShowcase.module.scss';

import React from 'react';
import { Box, Typography } from '@mui/material';

import { Expert } from '../model/types/Expert';
import { BaseAvatar, HStack, VStack } from '@/shared/ui';

interface ExpertCardProps {
    expert: Expert;
}

export const ExpertCard = (props: ExpertCardProps) => {
    const { expert } = props;

    return (
        <VStack spacing={2} className={styles['expertCard']}>
            <Box>
                <BaseAvatar
                    src={expert.avatarUrl}
                    alt={`Изображение ${expert.name}`}
                    className={styles['avatar']}
                />
            </Box>
            <VStack spacing={1}>
                <Typography variant="h4" color={'var(--primary-color-mono)'}>
                    {expert.name}
                </Typography>
                <HStack gap={1} className={styles['hStack']}>
                    <Typography variant="subtitle2" className={styles['secondaryText']}>
                        {expert.workCompany}
                    </Typography>
                    <svg width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="2" cy="2" r="2" fill="#B2BAC4" />
                    </svg>
                    <Typography variant="subtitle2" className={styles['secondaryText']}>
                        {expert.workPosition}
                    </Typography>
                </HStack>
            </VStack>
        </VStack>
    );
};
