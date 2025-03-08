import React from 'react';
import { Box, Typography } from '@mui/material';

import { BarChart } from '@/shared/ui/BarChart/BarChart';
import { DashboardBlock } from '@/shared/ui/DashboardBlock/DashboardBlock';

const TITLE = 'Распределение студентов проектного практикума по курсам';

const SUBTITLE = 'в 2025 году в нашем проекте приняли участие 2364 студента.';

const CHART_DATA = [
    { label: '2 курс', data: 920, backgroundColor: 'rgba(0, 123, 255, 1)' },
    { label: '3 курс', data: 783, backgroundColor: 'rgba(0, 123, 255, 0.5)' },
    { label: '4 курс', data: 661, backgroundColor: 'rgba(173, 216, 230, 1)' },
];

export const GoalSection = () => {
    return (
        <Box id="goal">
            <DashboardBlock
                title={TITLE}
                subtitle={
                    <Typography>
                        {SUBTITLE}
                    </Typography>
                }
            >
                <BarChart data={CHART_DATA} />
            </DashboardBlock>
        </Box>
    );
};
