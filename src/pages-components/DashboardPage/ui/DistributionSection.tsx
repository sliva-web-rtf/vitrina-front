import styles from './DashboardPage.module.scss';

import React from 'react';
import { Box, Typography } from '@mui/material';

import { PieChart } from '@/shared/ui/PieChart/PieChart';
import { DashboardBlock } from '@/shared/ui/DashboardBlock/DashboardBlock';
import { BaseButton, VStack } from '@/shared/ui';

import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';

const CHART_DATA = [
    { label: 'Самостоятельные со своими темами', data: 25, backgroundColor: '#0066FF' },
    { label: 'Внешний куратор', data: 25, backgroundColor: '#7EACFF' },
    { label: 'Самостоятельные с заказчиком', data: 25, backgroundColor: '#C1D7FE' },
    { label: 'Преподаватели', data: 25, backgroundColor: '#062756' },
];

export const DistributionSection = () => {
    return (
        <Box id="distribution">
            <DashboardBlock title="Распределение студентов по кураторам">
                <VStack spacing={12}>
                    <PieChart data={CHART_DATA} />
                    <BaseButton
                        className={styles['button']}
                        variant="contained"
                        href={'/experts'}
                        endIcon={<ArrowForwardRoundedIcon />}
                    >
                        <Typography variant="subtitle1">Об экспертах</Typography>
                    </BaseButton>
                </VStack>
            </DashboardBlock>
        </Box>
    );
};
