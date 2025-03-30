import styles from './ProfilePage.module.scss';

import React from 'react';

import { ProfileUser } from '@/entities/user';
import { HStack, VStack } from '@/shared/ui';
import { DefaultHeader } from '@/widgets/Header';
import { ProfileBanner } from '@/widgets/ProfileBanner';
import { ProjectsList } from '@/widgets/ProjectsList';
import { Box } from '@mui/material';

const ProfilePage = () => {
    return (
        <VStack>
            <DefaultHeader />
            <ProfileBanner />
            <HStack spacing={8} padding={8} alignItems="start">
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
