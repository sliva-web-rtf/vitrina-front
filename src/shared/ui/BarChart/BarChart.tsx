'use client';

import React from 'react';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { useMediaQuery } from '@mui/material';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ChartDataLabels);

type BarItem = {
    label: string;
    data: number;
    backgroundColor: string;
};

interface BarChartProps {
    data: BarItem[];
}

export const BarChart = (props: BarChartProps) => {
    const { data } = props;

    const matches = useMediaQuery('(max-width:768px)');

    const barData = {
        labels: [''],
        datasets: data.map((dat) => ({ ...dat, data: [dat.data] })),
    };

    const options = {
        indexAxis: 'y' as const,
        elements: {
            bar: {
                borderWidth: 0,
                borderSkipped: false,
                barThickness: matches ? 60 : 80,
            },
        },
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'bottom' as const,
                align: matches ? ('start' as const) : ('center' as const),
            },
            datalabels: {
                display: true,
                color: '#fff',
                anchor: 'center',
                align: 'center',
                font: {
                    size: matches ? 24 : 32,
                    weight: 'bold',
                },
            },
        },
        scales: {
            x: {
                stacked: !matches,
                display: false,
                min: 0,
                max: matches ? null : data.reduce((sum, item) => sum + item.data, 0),
            },
            y: {
                stacked: !matches,
                display: false,
                min: -2,
                max: 2,
            },
        },
    };

    // @ts-ignore
    return <Bar data={barData} options={options} />;
};
