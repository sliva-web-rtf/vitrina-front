import styles from './EditUser.module.scss';

import { HStack, VStack } from '@/shared/ui';
import React from 'react';
import Image from 'next/image';

import defaultAvatar from '@/shared/assets/defaultUserImage.jpg';
import { Typography } from '@mui/material';

export const EditUserAvatar = () => {
    return (
        <HStack gap={4} className={styles['smVertical']}>
            <Image
                className={styles['avatar']}
                src={defaultAvatar}
                alt="Редактировать фотографию профиля"
                width={144}
                height={144}
            />
            <VStack spacing={1.5}>
                <Typography variant="h5">Ваш аватар</Typography>
                <ul className={styles['listPadding']}>
                    <li>jpg, png, webp;</li>
                    <li>Не более 2 Мб.</li>
                </ul>
            </VStack>
        </HStack>
    );
};
