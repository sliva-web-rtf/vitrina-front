'use client';

import styles from './EditUser.module.scss';

import React from 'react';
import { Typography } from '@mui/material';

import { VStack } from '@/shared/ui';
import { FormInput } from '@/shared/ui/Input';
import { FormSelect } from '@/shared/ui/Select';
import { EditUserAvatar } from './EditUserAvatar';
import { FormFile } from '@/shared/ui/FormFile';

const SELECT_OPTIONS = [
    { label: 'Гений', value: 'genius' },
    { label: 'Пармезан', value: 'parmezan' },
    { label: 'Шлёпка', value: 'slave' },
    { label: 'Олег', value: 'Aleg' },
];

export const EditUser = () => {
    return (
        <VStack spacing={2} className={styles['editUser']}>
            <VStack id="general" spacing={4} className={styles['section']}>
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
            <VStack id="contacts" spacing={4} className={styles['section']}>
                <Typography variant="h4">Контакты</Typography>
                <VStack spacing={3}>
                    <FormInput type="search" label="Мобильный телефон" />
                    <FormInput type="search" label="Электронная почта" />
                    <FormInput type="search" label="Телеграм" />
                </VStack>
            </VStack>
            <VStack id="career" spacing={4} className={styles['section']}>
                <Typography variant="h4">Карьера</Typography>
                <VStack spacing={3}>
                    <FormInput type="search" label="Роль в команде" />
                    <FormSelect label="Специализация" options={SELECT_OPTIONS} />
                    <FormFile>Прикрепить резюме</FormFile>
                </VStack>
            </VStack>
            <VStack id="password" spacing={4} className={styles['section']}>
                <Typography variant="h4">Смена пароля</Typography>
                <VStack spacing={3}>
                    <FormInput type="search" label="Старый пароль" />
                    <FormInput type="search" label="Новый пароль" />
                    <FormInput type="search" label="Повторите пароль" />
                </VStack>
            </VStack>
        </VStack>
    );
};
