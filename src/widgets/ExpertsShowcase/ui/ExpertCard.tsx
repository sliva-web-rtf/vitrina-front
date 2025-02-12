import styles from './ExpertsShowcase.module.scss';

import React from 'react';
import { Box, Typography } from '@mui/material';

import { Expert } from '../model/types/Expert';
import { BaseAvatar, VStack } from '@/shared/ui';

interface ExpertCardProps {
    expert: Expert;
}

export const ExpertCard = (props: ExpertCardProps) => {
    const { expert } = props;
    const { name, avatarUrl, workCompany, workPosition } = expert;

    return (
        <VStack gap={1} className={`${styles['expertCard']} ${styles['stack']}`}>
            <Box>
                <BaseAvatar src={avatarUrl} alt={`Изображение ${name}`} className={styles['avatar']} />
            </Box>
            <VStack className={styles['stack']}>
                <Typography variant="h4" color={'var(--primary-color-mono)'} className={styles['mainText']}>
                    {name}
                </Typography>
                <Typography variant="subtitle2" className={styles['secondaryText']}>
                    {`${workCompany} • ${workPosition}`}
                </Typography>
            </VStack>
        </VStack>
    );
};
