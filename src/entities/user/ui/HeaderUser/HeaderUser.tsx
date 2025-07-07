'use client';

import styles from './HeaderUser.module.scss';

import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import { Box, Typography } from '@mui/material';

import DefaultUserImage from '@/shared/assets/defaultUserImage.jpg';
import { useSelector } from 'react-redux';
import { getIsAuthorized } from '@/entities/user';

export const HeaderUser = () => {
    const isAuthorized = useSelector(getIsAuthorized);

    if (!isAuthorized) {
        return (
            <Box>
                <Link href="/signin">
                    <Typography variant="subtitle1">Войти</Typography>
                </Link>
            </Box>
        );
    }

    return (
        <Box>
            <Link href="/profile">
                <Image src={DefaultUserImage} alt="User Avatar" className={styles['profileIcon']} />
            </Link>
        </Box>
    );
};
