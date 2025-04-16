'use client';

import styles from './EditUser.module.scss';

import { BaseButton, HStack, VStack } from '@/shared/ui';
import React, { useState } from 'react';
import Image from 'next/image';

import defaultAvatar from '@/shared/assets/defaultUserImage.jpg';
import { Menu, MenuItem, Typography } from '@mui/material';
import DeleteIcon from '@/shared/ui/MuiIcons/DeleteIcon';
import EditIcon from '@/shared/ui/MuiIcons/EditIcon';

export const EditUserAvatar = () => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <HStack gap={4} className={styles['smVertical']}>
            <BaseButton onClick={handleClick} className={styles['imageBtn']}>
                <Image
                    className={styles['avatar']}
                    src={defaultAvatar}
                    alt="Редактировать фотографию профиля"
                    width={144}
                    height={144}
                />
            </BaseButton>
            <VStack spacing={1.5}>
                <Typography variant="h5">Ваш аватар</Typography>
                <ul className={styles['listPadding']}>
                    <li>jpg, png, webp;</li>
                    <li>Не более 2 Мб.</li>
                </ul>
            </VStack>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem onClick={handleClose}>
                    <EditIcon />
                    Изменить
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <DeleteIcon color="error" />
                    Удалить
                </MenuItem>
            </Menu>
        </HStack>
    );
};
