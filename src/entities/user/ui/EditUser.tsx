'use client';

import { VStack } from '@/shared/ui';
import styles from './EditUser.module.scss';

import React from 'react';
import { Typography } from '@mui/material';
import { FormInput } from '@/shared/ui/Input';
import { EditUserAvatar } from './EditUserAvatar';

export const EditUser = () => {
    return (
        <VStack spacing={2} className={styles['editUser']}>
            <VStack spacing={4} className={styles['section']}>
                <Typography variant="h4">Основная инфорамция</Typography>
                <EditUserAvatar />
                <VStack spacing={3}>
                    <FormInput type="search" label="Фамилия" />
                    <FormInput type="search" label="Имя" />
                    <FormInput type="search" label="Отчество" />
                    <FormInput type="search" label="Образование" />
                    <FormInput type="search" label="Курс" />
                </VStack>
            </VStack>
            <VStack spacing={4} className={styles['section']}>
                <Typography variant="h4">Контакты</Typography>
                <VStack spacing={3}>
                    <FormInput type="search" label="Мобильный телефон" />
                    <FormInput type="search" label="Электронная почта" />
                    <FormInput type="search" label="Телеграм" />
                </VStack>
            </VStack>
            <VStack spacing={4} className={styles['section']}>
                <Typography variant="h4">Карьера</Typography>
                <VStack spacing={3}>
                    <FormInput type="search" label="Роль в команде" />
                    <FormInput type="search" label="Специализация" />
                    <FormInput type="file" label="Резюме" />
                </VStack>
            </VStack>
            <VStack spacing={4} className={styles['section']}>
                <Typography variant="h4">Смена пароля</Typography>
                <VStack spacing={3}>
                    <FormInput type="search" label="Старый пароль" />
                    <FormInput type="search" label="СпециалНовый парольизация" />
                    <FormInput type="search" label="Повторите пароль" />
                </VStack>
            </VStack>
        </VStack>
    );
};
