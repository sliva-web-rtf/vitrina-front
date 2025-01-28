import React from 'react';
import { Box } from '@mui/material';

import { PieChart } from '@/shared/ui/PieChart/PieChart';
import { DashboardBlock } from '@/shared/ui/DashboardBlock/DashboardBlock';

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
                <PieChart data={CHART_DATA} />
            </DashboardBlock>
        </Box>
    );
};
