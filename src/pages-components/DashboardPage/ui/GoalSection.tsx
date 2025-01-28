import styles from './DashboardPage.module.scss';

import React from 'react';
import { Box, Typography } from '@mui/material';

import { BarChart } from '@/shared/ui/BarChart/BarChart';
import { DashboardBlock } from '@/shared/ui/DashboardBlock/DashboardBlock';

const TITLE = 'Основная цель'

const SUBTITLE = 'Мы хотим предоставить студентам возможность применить полученные знания на практике, ';
const SUBTITLE_COLORED = (
    <span className={styles['colorBlueText']}>
        развить навыки командной работы, управления проектами и попробовать себя в решении реальных задач.
    </span>
);

const CHART_DATA = [
    { label: '2 курс', data: 950, backgroundColor: 'rgba(0, 123, 255, 1)' },
    { label: '3 курс', data: 750, backgroundColor: 'rgba(0, 123, 255, 0.5)' },
    { label: '4 курс', data: 500, backgroundColor: 'rgba(173, 216, 230, 1)' },
];


export const GoalSection = () => {
    return (
        <Box id="goal">
            <DashboardBlock title={TITLE} subtitle={<Typography>
                {SUBTITLE}{SUBTITLE_COLORED}
            </Typography>}>
                <BarChart data={CHART_DATA} />
            </DashboardBlock>
        </Box>
    );
};
