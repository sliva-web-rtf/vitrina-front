import styles from './DashboardPage.module.scss';

import React from 'react';
import { Box, Typography } from '@mui/material';

import { HStack, VStack } from '@/shared/ui';
import { DashboardBlock } from '@/shared/ui/DashboardBlock/DashboardBlock';

const OPPORTUNITIES = [
    { id: 1, text: 'Реализовать продукт, который откладывали в долгий ящик' },
    { id: 2, text: 'Работа над проектами вместе со студентами' },
    { id: 3, text: 'Проверить ваши гипотезы вместе со студентами' },
    { id: 4, text: 'Показать себя в качестве надежного работодателя' },
];

const UNIVERSITY_STATS = [
    { stat: '26', text: 'Заказчиков' },
    { stat: '64', text: 'Куратора' },
    { stat: '3', text: 'Научные лаборатории' },
    { stat: '30+', text: 'IT-компаний' },
];

export const PartnershipSection = () => {
    return (
        <Box id="partnership">
            <DashboardBlock
                title="Возможности для партнеров"
                subtitle="Вы сможете курировать студентов и развивать менеджерские компетенции ваших сотрудников, дать им
                    возможность передавать свой опыт подрастающему поколению"
            >
                <Box sx={{ marginBottom: '64px' }}>
                    <HStack className={styles['hStack']} gap={2} width={'100%'}>
                        {OPPORTUNITIES.map((opportunity) => (
                            <VStack
                                key={opportunity.id}
                                spacing={6}
                                sx={{
                                    padding: '24px',
                                    backgroundColor: '#FFF',
                                    borderRadius: 'var(--border-radius)',
                                }}
                            >
                                <Typography
                                    sx={{
                                        display: 'flex',
                                        width: '48px',
                                        aspectRatio: 1,
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        color: '#fff',
                                        textAlign: 'center',
                                        fontSize: '24px',
                                        borderRadius: '100%',
                                        backgroundColor: 'var(--primary-color)',
                                    }}
                                >
                                    {opportunity.id}
                                </Typography>
                                <Typography variant="h3" fontWeight="500">
                                    {opportunity.text}
                                </Typography>
                            </VStack>
                        ))}
                    </HStack>
                </Box>
                <Box className={styles['bigImageBg']}>
                    <Typography>
                        Вы сможете найти и проверить <span className={styles['colorBlueText']}>будущих сотрудников</span>
                    </Typography>
                    <HStack className={styles['hStack']} gap={2} width={'100%'} justifyContent={"center"}>
                        {UNIVERSITY_STATS.map((stat, index) => (
                            <VStack
                                key={index}
                                gap={4}
                                sx={{
                                    padding: '24px',
                                    width: '100%',
                                    maxWidth: '300px',
                                    backgroundColor: 'var(--primary-color)',
                                    borderRadius: 'var(--border-radius)',
                                }}
                            >
                                <Typography variant="h2" color="#fff">
                                    {stat.stat}
                                </Typography>
                                <Box>
                                    <Typography variant="h3" color={'#fff'} fontWeight="500">
                                        {stat.text}
                                    </Typography>
                                </Box>
                            </VStack>
                        ))}
                    </HStack>
                </Box>
            </DashboardBlock>
        </Box>
    );
};
