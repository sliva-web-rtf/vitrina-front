'use client';

import styles from './PieChart.module.scss';

import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { useMediaQuery } from '@mui/material';

ChartJS.register(ArcElement, Tooltip, Legend);

interface PieChartProps {
    data: {
        label: string;
        data: number;
        backgroundColor: string;
    }[];
}

export const PieChart = (props: PieChartProps) => {
    const { data } = props;

    const matches = useMediaQuery('(max-width:768px)');

    const pieData = {
        labels: data.map((dat) => dat.label),
        datasets: [
            {
                data: data.map((dat) => dat.data),
                backgroundColor: data.map((dat) => dat.backgroundColor),
                borderColor: 'rgba(255, 255, 255, 0.4)',
                borderRadius: 16,
                borderSkipped: false,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: matches ? ('bottom' as const) : ('right' as const),
                align: matches ? ('start' as const) : ('center' as const),
            },
            datalabels: {
                display: false,
            },
        },
    };

    return <Pie data={pieData} options={options} className={styles['pieChart']} />;
};
