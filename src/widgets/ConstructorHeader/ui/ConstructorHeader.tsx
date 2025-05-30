'use client';

import styles from './ConstructorHeader.module.scss';

import { BaseButton, HStack } from '@/shared/ui';
import Image from 'next/image';
import React from 'react';

import logo from '@/shared/assets/logo-icon.svg';
import { ProjectNameInput } from '@/shared/ui/Input';
import { Typography } from '@mui/material';

export const ConstructorHeader = () => {
    const [name, setName] = React.useState('Новый проект');

    return (
        <HStack component="header" className={styles['header']}>
            <HStack spacing={0.5} alignItems="center">
                <Image src={logo} alt="Конструктор витрины проектов" width="50" />
                <ProjectNameInput value={name} className={styles['name']} onChange={(e) => setName(e.target.value)} />
            </HStack>
            <HStack className={styles['buttons']} spacing={0.5}>
                <BaseButton
                    className={styles['button']}
                    variant="contained"
                    onClick={() => alert('dev in progress...')}
                >
                    <Typography variant="body1">Опубликовать</Typography>
                </BaseButton>
            </HStack>
        </HStack>
    );
};
