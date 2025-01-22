import styles from './DashboardPage.module.scss';

import React from 'react';

import { BarChart } from '@/shared/ui/BarChart/BarChart';
import { DashboardBlock } from '@/shared/ui/DashboardBlock/DashboardBlock';

const CHART_DATA = {
    labels: ['>950', '>750', '500'],
    datasets: [
        {
            label: 'Students',
            data: [950, 750, 500],
            backgroundColor: [
                'rgba(0, 123, 255, 1)', // >950
                'rgba(0, 123, 255, 0.5)', // >750
                'rgba(173, 216, 230, 1)', // 500
            ],
            borderColor: ['rgba(0, 123, 255, 1)', 'rgba(0, 123, 255, 1)', 'rgba(173, 216, 230, 1)'],
            borderWidth: 1,
        },
    ],
};

export const GoalSection = () => {
    return (
        <section id="goal">
            <DashboardBlock
                title="Основаня цель"
                subtitle={
                    <>
                        Мы хотим предоставить студентам возможность применить полученные знания на практике,{' '}
                        <span className={styles['colorBlueText']}>
                            развить навыки командной работы, управления проектами и попробовать себя в решении реальных
                            задач.
                        </span>
                    </>
                }
            >
                <BarChart data={CHART_DATA} />
            </DashboardBlock>
        </section>
    );
};
