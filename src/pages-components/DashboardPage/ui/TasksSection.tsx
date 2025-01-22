'use client';

import React from 'react';
import { Box, Typography } from '@mui/material';

import { Accordion } from '@/shared/ui/Accordion/Accordion';
import { DashboardBlock } from '@/shared/ui/DashboardBlock/DashboardBlock';

const ACCORDIONS = [
    {
        id: 1,
        label: 'Mobile',
        text: 'Приложение для управления финансами: Разработка интерфейса для отслеживания доходов и расходов. Интеграция с банковскими API для автоматического импорта транзакций.',
    },
    {
        id: 2,
        label: 'WEB',
        text: 'Приложение для управления финансами: Разработка интерфейса для отслеживания доходов и расходов. Интеграция с банковскими API для автоматического импорта транзакций.',
    },
    {
        id: 3,
        label: 'БПЛА',
        text: 'Приложение для управления финансами: Разработка интерфейса для отслеживания доходов и расходов. Интеграция с банковскими API для автоматического импорта транзакций.',
    },
    {
        id: 4,
        label: 'AR/VR/3D',
        text: 'Приложение для управления финансами: Разработка интерфейса для отслеживания доходов и расходов. Интеграция с банковскими API для автоматического импорта транзакций.',
    },
    {
        id: 5,
        label: 'Машинное обучение',
        text: 'Приложение для управления финансами: Разработка интерфейса для отслеживания доходов и расходов. Интеграция с банковскими API для автоматического импорта транзакций.',
    },
    {
        id: 6,
        label: 'Аналитика',
        text: 'Приложение для управления финансами: Разработка интерфейса для отслеживания доходов и расходов. Интеграция с банковскими API для автоматического импорта транзакций.',
    },
];

export const TasksSection = () => {
    return (
        <section id="tasks">
            <DashboardBlock
                title="Задачи"
                subtitle="В рамках дисциплины студенты делают проекты по своей специальности вместе с партнёрами университета! Перечень направлений, по которым ведётся работа:"
            >
                <Box
                    sx={(theme) => ({
                        padding: '64px',
                        backgroundColor: 'var(--primary-color-99)',
                        borderRadius: '32px',
                        [theme.breakpoints.down('xl')]: {
                            padding: '32px',
                        },
                        [theme.breakpoints.down('sm')]: {
                            padding: '16px',
                        },
                    })}
                >
                    {ACCORDIONS.map((accordionData) => (
                        <Accordion key={accordionData.id} label={accordionData.label}>
                            {accordionData.text}
                        </Accordion>
                    ))}
                </Box>
            </DashboardBlock>
        </section>
    );
};
