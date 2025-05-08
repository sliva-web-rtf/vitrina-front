import styles from './DashboardPage.module.scss';

import React from 'react';
import { Box } from '@mui/material';

import { Accordion } from '@/shared/ui/Accordion/Accordion';
import { DashboardBlock } from '@/shared/ui/DashboardBlock/DashboardBlock';
import Link from 'next/link';

const ACCORDIONS = [
    {
        id: 1,
        label: 'Мобильная разработка',
        text: (
            <ul>
                <li>
                    <Link href={'/project/15'}>Игра &quot;Падежики&quot;</Link>
                </li>
                <li>
                    <Link href={'/project/33'}>Мобильная игра «LineWars: Русы против Ящеров»</Link>
                </li>
            </ul>
        ),
    },
    {
        id: 2,
        label: 'Web-разработка',
        text: (
            <ul>
                <li>
                    <Link href={'/project/27'}>Система подсчёта скота пастбищного выгула</Link>
                </li>
                <li>
                    <Link href={'/project/28'}>Система мониторинга рождения телят</Link>
                </li>
                <li>
                    <Link href={'/project/30'}>Сервис изучения русского жестового языка</Link>
                </li>
                <li>
                    <Link href={'/project/24'}>Исторический онлайн-квиз</Link>
                </li>
                <li>
                    <Link href={'/project/34'}>Навигатор УрФУ</Link>
                </li>
                <li>
                    <Link href={'/project/36'}>Сайт для бронирования коворкингов</Link>
                </li>
            </ul>
        ),
    },
    {
        id: 3,
        label: 'Инструменты для управления организационной структурой',
        text: (
            <ul>
                <li>
                    <Link href={'/project/29'}>Система визуальной генерации орг. структуры компании</Link>
                </li>
            </ul>
        ),
    },
    {
        id: 4,
        label: 'Научно-прикладные исследования',
        text: (
            <ul>
                <li>
                    <Link href={'/project/52'}>Плазменное напыление покрытий</Link>
                </li>
            </ul>
        ),
    },
    {
        id: 5,
        label: 'Голосовые технологии и ассистенты',
        text: (
            <ul>
                <li>
                    <Link href={'/project/26'}>Создание голосового помощника для людей с дефектами речи</Link>
                </li>
            </ul>
        ),
    },
    {
        id: 6,
        label: 'Разработка игр',
        text: (
            <ul>
                <li>
                    <Link href={'/project/20'}>Игра &quot;Blue Light&quot;</Link>
                </li>
                <li>
                    <Link href={'/project/21'}>Игра &quot;Charon&apos;s Odyssey&quot;</Link>
                </li>
                <li>
                    <Link href={'/project/22'}>Игра аркада на двоих &quot;The Final Countdown&quot;</Link>
                </li>
                <li>
                    <Link href={'/project/19'}>Игра &quot;Приказ: Ликвидация&quot;</Link>
                </li>
            </ul>
        ),
    },
];

export const TasksSection = () => {
    return (
        <Box id="tasks">
            <DashboardBlock
                title="Задачи"
                subtitle="В рамках дисциплины студенты делают проекты по своей специальности вместе с партнёрами университета! Перечень направлений, по которым ведётся работа:"
            >
                <Box className={styles['highlight']}>
                    {ACCORDIONS.map((accordionData) => (
                        <Accordion key={accordionData.id} label={accordionData.label}>
                            {accordionData.text}
                        </Accordion>
                    ))}
                </Box>
            </DashboardBlock>
        </Box>
    );
};
