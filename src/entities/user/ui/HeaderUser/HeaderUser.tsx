import styles from './HeaderUser.module.scss';

import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import { Box } from '@mui/material';

import DefaultUserImage from '@/shared/assets/defaultUserImage.jpg';

export const HeaderUser = () => {
    return (
        <Box>
            <Link href="/profile">
                <Image src={DefaultUserImage} alt="User Avatar" className={styles['profileIcon']} />
            </Link>
        </Box>
    );
};
