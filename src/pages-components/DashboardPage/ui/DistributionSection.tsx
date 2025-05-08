import React from 'react';
import { Box } from '@mui/material';

import { PieChart } from '@/shared/ui/PieChart/PieChart';
import { DashboardBlock } from '@/shared/ui/DashboardBlock/DashboardBlock';
import { VStack } from '@/shared/ui';

const TITLE = 'Распределение студентов по кураторам';

const SUBTITLE =
    'Всего студентами было создано 534 проекта, в том числе 318 проектов от УрФУ, 179 проектов от компаний-партнеров и 37 студенческих проектов. ';

const CHART_DATA = [
    { label: 'Студенческий проект', data: 37, backgroundColor: 'rgba(0, 123, 255, 1)' },
    { label: 'Проект от партнера', data: 179, backgroundColor: 'rgba(0, 123, 255, 0.5)' },
    { label: 'Проект от Университета', data: 281, backgroundColor: 'rgba(173, 216, 230, 1)' },
];

export const DistributionSection = () => {
    return (
        <Box id="distribution">
            <DashboardBlock title={TITLE} subtitle={SUBTITLE}>
                <VStack alignItems={'center'}>
                    <PieChart data={CHART_DATA} />
                </VStack>
            </DashboardBlock>
        </Box>
    );
};
