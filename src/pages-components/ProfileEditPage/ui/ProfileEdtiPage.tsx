import styles from './ProfileEditPage.module.scss';

import { EditUser } from '@/entities/user';
import { HStack, VStack } from '@/shared/ui';
import { DefaultHeader } from '@/widgets/Header';
import React from 'react';

const ProfileEdtiPage = () => {
    return (
        <VStack spacing={8}>
            <DefaultHeader />
            <HStack justifyContent="center" className={styles['spaceHeader']}>
                <EditUser />
            </HStack>
        </VStack>
    );
};

export default ProfileEdtiPage;
