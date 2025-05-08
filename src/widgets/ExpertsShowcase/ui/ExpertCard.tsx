import styles from './ExpertsShowcase.module.scss';

import React from 'react';
import { Box, Tooltip, Typography } from '@mui/material';

import { Expert } from '../model/types/Expert';
import { BaseAvatar, HStack, VStack } from '@/shared/ui';

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
            <VStack className={styles['stack']} gap={0}>
                <Typography variant="h4" color={'var(--primary-color-mono)'} className={styles['mainText']}>
                    {name}
                </Typography>
                <HStack justifyContent="space-between">
                    <Tooltip title={workCompany} placement="top" arrow>
                        <Typography variant="subtitle2" noWrap className={styles['secondaryText']}>
                            {workCompany}
                        </Typography>
                    </Tooltip>
                    <Tooltip title={workPosition} placement="top" arrow>
                        <Typography variant="subtitle2" noWrap className={styles['secondaryText']}>
                            {workPosition}
                        </Typography>
                    </Tooltip>
                </HStack>
            </VStack>
        </VStack>
    );
};
