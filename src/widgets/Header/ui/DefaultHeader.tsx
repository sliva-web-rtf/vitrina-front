import styles from './Header.module.scss';

import React from 'react';
import { HStack } from '@/shared/ui';
import { MobileMenu } from '@/widgets/MobileMenu';
import { Box, Typography } from '@mui/material';
import Link from 'next/link';
import Image from 'next/image';
import logo from '@/shared/assets/logo.svg';

const NAV_LINKS = [
    { text: 'Главная', href: '/' },
    { text: 'Конструктор', href: '/constructor' },
    { text: 'Эксперты', href: '/experts' },
    { text: 'О нас', href: '/dashboard' },
];

export const DefaultHeader = () => {
    return (
        <HStack
            component="header"
            className={styles['container']}
            alignItems="center"
            justifyContent="space-between"
            zIndex={100000}
        >
            <Link href="/">
                <Image src={logo} alt="Проектный практикум" />
            </Link>

            <HStack component="nav" spacing={4} className={styles['nav']}>
                {NAV_LINKS.map((item, index) => (
                    <Link key={index} href={item.href}>
                        <Typography variant="subtitle1">{item.text}</Typography>
                    </Link>
                ))}
            </HStack>
            <MobileMenu className={styles['burger']} nav={NAV_LINKS} />
        </HStack>
    );
};
