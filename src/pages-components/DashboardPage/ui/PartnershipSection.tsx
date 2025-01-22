'use client';

import styles from './DashboardPage.module.scss';

import React from 'react';
import { Box, Stack, Typography, useMediaQuery } from '@mui/material';

import { HStack, VStack } from '@/shared/ui';
import { DashboardBlock } from '@/shared/ui/DashboardBlock/DashboardBlock';

const OPPORTUNITIES = [
    { id: 1, text: 'Реализовать продукт, который откладывали в долгий ящик' },
    { id: 2, text: 'Работа над проектами вместе со студентами' },
    { id: 3, text: 'Проверить ваши гипотезы вместе со студентами' },
    { id: 4, text: 'Показать себя в качестве надежного работодателя' },
];

const UNIVERSITY_STATS = [
    { stat: '5+', text: 'Университетов' },
    { stat: '2', text: 'Крупных НПО' },
    { stat: '3', text: 'Научные лаборатории' },
    { stat: '30+', text: 'IT-компаний' },
];

export const PartnershipSection = () => {
    return (
        <section id="partnership">
            <DashboardBlock
                title="Возможности для партнеров"
                subtitle="Вы сможете курировать студентов и развивать менеджерские компетенции ваших сотрудников, дать им
                    возможность передавать свой опыт подрастающему поколению"
            >
                <HStack
                    sx={(theme) => ({
                        marginBottom: '64px',
                        width: '100%',
                        justifyContent: 'center',
                        gap: '16px',
                        [theme.breakpoints.down('lg')]: {
                            flexDirection: 'column',
                        },
                    })}
                >
                    {OPPORTUNITIES.map((opportunity) => (
                        <VStack
                            key={opportunity.id}
                            spacing={'48px'}
                            sx={(theme) => ({
                                padding: '24px',
                                width: '380px',
                                backgroundColor: '#FFF',
                                borderRadius: 'var(--border-radius)',
                                [theme.breakpoints.down('lg')]: {
                                    width: '100%',
                                },
                            })}
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
                            <Typography sx={{ fontSize: '24px' }}>{opportunity.text}</Typography>
                        </VStack>
                    ))}
                </HStack>
                <Box className={styles['bigImageBg']}>
                    <Typography
                        sx={(theme) => ({
                            textAlign: 'center',
                            color: '#fff',
                            fontWeight: 700,
                            lineHeight: '67px',
                            fontSize: '56px',
                            [theme.breakpoints.down('lg')]: {
                                color: '#000',
                                textAlign: 'start',
                                fontSize: '2rem',
                                lineHeight: '33px',
                            },
                        })}
                    >
                        Вы сможете найти и проверить{' '}
                        <span className={styles['colorBlueText']}>будущих сотрудников</span>
                    </Typography>
                    <HStack
                        sx={(theme) => ({
                            width: '100%',
                            justifyContent: 'center',
                            gap: '16px',
                            [theme.breakpoints.down('lg')]: {
                                flexDirection: 'column',
                            },
                        })}
                    >
                        {UNIVERSITY_STATS.map((stat, index) => (
                            <VStack
                                key={index}
                                spacing={'32px'}
                                sx={(theme) => ({
                                    padding: '24px',
                                    width: '295px',
                                    backgroundColor: 'var(--primary-color)',
                                    borderRadius: 'var(--border-radius)',
                                    justifyContent: 'center',
                                    [theme.breakpoints.down('lg')]: {
                                        margin: '0',
                                        width: '100%',
                                    },
                                })}
                            >
                                <Typography
                                    sx={{
                                        width: '48px',
                                        color: '#fff',
                                        fontSize: '56px',
                                    }}
                                >
                                    {stat.stat}
                                </Typography>
                                <Box>
                                    <Typography sx={{ color: '#fff', fontSize: '24px' }}>{stat.text}</Typography>
                                </Box>
                            </VStack>
                        ))}
                    </HStack>
                </Box>
            </DashboardBlock>
        </section>
    );
};
