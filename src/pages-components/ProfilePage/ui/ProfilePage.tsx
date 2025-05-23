import styles from './ProfilePage.module.scss';

import React from 'react';

import { ProfileUser } from '@/entities/user';
import { HStack, VStack } from '@/shared/ui';
import { ProfileBanner } from '@/widgets/ProfileBanner';
import { ProjectsList } from '@/widgets/ProjectsList';
import { Box } from '@mui/material';
import { Header } from '@/widgets/Header';

const ProfilePage = () => {
    return (
        <VStack>
            <Header transparent />
            <ProfileBanner />
            <HStack gap={8} padding={8} alignItems="start" className={styles['smVertical']}>
                <Box className={styles['stepOnBannerWrapper']}>
                    <Box className={styles['stepOnBanner']}>
                        <ProfileUser />
                    </Box>
                </Box>
                <ProjectsList />
            </HStack>
        </VStack>
    );
};

export default ProfilePage;
