import styles from './DashboardPage.module.scss';

import { DashboardBlock } from '@/shared/ui/DashboardBlock/DashboardBlock';
import { Box, Typography } from '@mui/material';
import React from 'react';

const TITLE = 'Основная цель';

const SUBTITLE = 'Мы хотим предоставить студентам возможность применить полученные знания на практике, ';
const SUBTITLE_COLORED = (
    <span className={styles['colorBlueText']}>
        развить навыки командной работы, управления проектами и попробовать себя в решении реальных задач.
    </span>
);

export const MainGoalSection = () => {
    return (
        <Box id="mainGoal">
            <DashboardBlock
                title={TITLE}
                subtitle={
                    <Typography>
                        {SUBTITLE}
                        {SUBTITLE_COLORED}
                    </Typography>
                }
            />
        </Box>
    );
};
