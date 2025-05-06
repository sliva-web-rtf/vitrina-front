import styles from './ConstructorTemplatesList.module.scss';

import React from 'react';
import Link from 'next/link';
import { Typography } from '@mui/material';

import { HStack, VStack } from '@/shared/ui';
import { ConstructorTemplate } from '../../ConstructorTemplate';

export const ConstructorTemplatesList = () => {
    return (
        <VStack spacing={2.5} className={styles['templatesList']}>
            <Typography variant="h5">Новый проект</Typography>
            <HStack spacing={4}>
                <Link href={'/constructor/new'}>
                    <ConstructorTemplate name="Пустой проект" />
                </Link>
            </HStack>
        </VStack>
    );
};
