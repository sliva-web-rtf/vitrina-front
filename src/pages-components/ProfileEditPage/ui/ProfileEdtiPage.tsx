import styles from './ProfileEditPage.module.scss';

import { EditUser } from '@/entities/user';
import { HStack, VStack } from '@/shared/ui';
import { SideNavMenu } from '@/shared/ui/SideNavMenu';
import { DefaultHeader } from '@/widgets/Header';
import { Box } from '@mui/material';
import React from 'react';

const MENU_BUTTONS = [
    {
        label: 'Основная информация',
        href: '#general',
    },
    {
        label: 'Контакты',
        href: '#contacts',
    },
    {
        label: 'Резюме',
        href: '#career',
    },
    {
        label: 'Смена пароля',
        href: '#password',
    },
];

const ProfileEdtiPage = () => {
    return (
        <VStack spacing={8}>
            <DefaultHeader />
            <HStack spacing={2} justifyContent="center" className={styles['spaceHeader']}>
                <Box className={styles['smHide']}>
                    <SideNavMenu buttons={MENU_BUTTONS} />
                </Box>
                <EditUser />
            </HStack>
        </VStack>
    );
};

export default ProfileEdtiPage;
