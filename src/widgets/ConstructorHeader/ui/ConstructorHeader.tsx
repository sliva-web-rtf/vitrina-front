'use client';

import styles from './ConstructorHeader.module.scss';

import { BaseButton, HStack } from '@/shared/ui';
import Image from 'next/image';
import React from 'react';

import logo from '@/shared/assets/logo-icon.svg';
import { ProjectNameInput } from '@/shared/ui/Input';
import { Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { StateSchema } from '@/app/providers/StoreProvider/config/StateSchema';
import { setProjectName } from '@/entities/constructorProject';
import Link from 'next/link';

export const ConstructorHeader = () => {
    const name = useSelector((state: StateSchema) => state.constructorProject.name);
    const dispatch = useDispatch();

    const updateName = (name: string) => {
        dispatch(setProjectName(name));
    };

    return (
        <HStack component="header" className={styles['header']}>
            <HStack spacing={0.5} alignItems="center">
                <Link href="/constructor">
                    <Image src={logo} alt="Конструктор витрины проектов" width="50" />
                </Link>
                <ProjectNameInput
                    value={name}
                    className={styles['name']}
                    onChange={(e) => updateName(e.target.value)}
                />
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
