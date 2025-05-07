import styles from './Header.module.scss';

import React from 'react';
import { HStack } from '@/shared/ui';
import { MobileMenu } from '@/widgets/MobileMenu';
import { Box, Typography } from '@mui/material';
import Link from 'next/link';
import Image from 'next/image';
import logo from '@/shared/assets/logo.svg';
import classNames from 'classnames';

const NAV_LINKS = [
    { text: 'Главная', href: '/' },
    { text: 'Конструктор', href: '/constructor' },
    { text: 'Эксперты', href: '/experts' },
    { text: 'О нас', href: '/dashboard' },
];

export const Header = ({ transparent = false }: { transparent?: boolean }) => {
    return (
        <Box>
            <HStack
                component="header"
                className={classNames(styles['container'], { [styles['containerTransparent']]: transparent })}
                alignItems="center"
                justifyContent="space-between"
                zIndex={100000}
            >
                <Link href="/">
                    <Image className={styles['logo']} src={logo} alt="Проектный практикум" />
                </Link>

                <HStack component="nav" spacing={4} className={styles['nav']}>
                    {NAV_LINKS.map((item, index) => (
                        <Link key={index} href={item.href}>
                            <Typography variant="subtitle1">{item.text}</Typography>
                        </Link>
                    ))}
                </HStack>

                <HStack></HStack>

                <MobileMenu className={styles['burger']} nav={NAV_LINKS} />
            </HStack>
            {!transparent && <Box className={styles['spacer']} />}
        </Box>
    );
};
