'use client';

import logo from '@/shared/assets/logo.svg';
import { BaseButton, HStack } from '@/shared/ui';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import { Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import styles from './MainHeader.module.scss';

export const MainHeader = () => (
    <HStack component="header" className={styles.container} alignItems="center" justifyContent="space-between">
        <Image src={logo} alt="Проектный практикум" />
        <HStack component="nav" spacing={4}>
            <Link href="#projects">
                <Typography variant="subtitle1">Топ</Typography>
            </Link>
            <Link href="#projects">
                <Typography variant="subtitle1">Все проекты</Typography>
            </Link>
        </HStack>

        <BaseButton variant="contained" endIcon={<ArrowForwardRoundedIcon />}>
            <Typography variant="subtitle1">Витрина проектов</Typography>
        </BaseButton>
    </HStack>
);
