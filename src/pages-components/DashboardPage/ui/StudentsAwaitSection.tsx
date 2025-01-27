import styles from './DashboardPage.module.scss';

import React from 'react';
import { Typography } from '@mui/material';

import { HStack } from '@/shared/ui';
import { CheckList } from '@/shared/ui/CheckList/CheckList';
import { DashboardBlock } from '@/shared/ui/DashboardBlock/DashboardBlock';

export const StudentsAwaitSection = () => {
    return (
        <section id="studentsAwait">
            <DashboardBlock title="Студентов ждет:">
                <HStack gap={6} className={styles['hStack']}>
                    <Typography variant="subtitle1">
                        Возможность попробовать себя во время учебы в университете в разных ролях: аналитика, тимлида,
                        дизайнера, разработчика, тестировщика и т.д.
                    </Typography>
                    <CheckList
                        items={[
                            'Применение теоретических знаний на практике.',
                            'Развитие навыков командной работы и коммуникации.',
                            'Получение опыта управления проектами.',
                            'Подготовка к реальным условиям работы.',
                            'Возможность получить обратную связь от опытных специалистов.',
                            'Получение опыта работы с заказчиками, роль которых выполняют партнеры университета.',
                            'Возможность пополнить свое резюме интересными проектами.',
                        ]}
                    />
                </HStack>
            </DashboardBlock>
        </section>
    );
};
