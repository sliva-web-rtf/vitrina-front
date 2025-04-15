import styles from './ProfileBanner.module.scss';

import React from 'react';
import { Box } from '@mui/material';

export const ProfileBanner = () => {
    return (
        <Box className={styles['profileBannerContainer']}>
            <Box className={styles['profileBanner']} />
        </Box>
    );
};
