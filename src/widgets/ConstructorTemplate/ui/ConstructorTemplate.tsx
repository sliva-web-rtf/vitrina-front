import styles from './ConstructorTemplate.module.scss';

import { VStack } from '@/shared/ui';
import { Box, Typography } from '@mui/material';
import React from 'react';
import { ConstructorTemplateType } from '../model/types/ConstructorTemplateType';

export const ConstructorTemplate = (props: ConstructorTemplateType) => {
    const { name } = props;

    return (
        <VStack spacing={1.25} className={styles['constructorTemplate']}>
            <Box className={styles['preview']} />
            <Typography className={styles['header']} variant="h5">
                {name}
            </Typography>
        </VStack>
    );
};
