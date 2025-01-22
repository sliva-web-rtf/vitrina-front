import React from 'react';

import { PieChart } from '@/shared/ui/PieChart/PieChart';
import { DashboardBlock } from '@/shared/ui/DashboardBlock/DashboardBlock';

const CHART_DATA = {
    labels: ['Самостоятельные со своими темами', 'Внешний куратор', 'Самостоятельные с заказчиком', 'Преподаватели'],
    datasets: [
        {
            data: [50, 50, 50, 50],
            backgroundColor: ['#0066FF', '#7EACFF', '#C1D7FE', '#062756'],
        },
    ],
};

export const DistributionSection = () => {
    return (
        <section id="distribution">
            <DashboardBlock title="Распределение студентов по кураторам">
                <PieChart data={CHART_DATA} />
            </DashboardBlock>
        </section>
    );
};
