'use client';

import styles from './PieChart.module.scss';

import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, ChartData } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

export const PieChart = (props: { data: ChartData<'pie', number[], string> }) => {
    const { data } = props;

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'right' as const,
            },
        },
    };

    return <Pie data={data} options={options} className={styles['pieChart']} />;
};
