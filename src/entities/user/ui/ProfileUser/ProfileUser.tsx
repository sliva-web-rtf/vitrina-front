import styles from './ProfileUser.module.scss';

import React, { ReactNode } from 'react';
import Image from 'next/image';
import { Typography, Table, TableBody, TableRow, TableCell, Box } from '@mui/material';

import { BaseButton, HStack, VStack } from '@/shared/ui';

import defaultProfilePicture from '@/shared/assets/defaultUserImage.jpg';

import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PhoneIcon from '@mui/icons-material/Phone';
import TelegramIcon from '@/shared/ui/MuiIcons/TelegramIcon';
import { RegularLink } from '@/shared/ui/Link';

type Tag = {
    label: string;
    value: string;
};

type Contact = {
    icon: ReactNode;
    label: string;
    href: string;
};

const TAGS: Tag[] = [
    { label: 'Роль', value: 'Дизайнер' },
    { label: 'Специализация', value: 'Веб' },
    { label: 'Образование', value: 'Бакалавр' },
    { label: 'Курс', value: '3' },
];

const CONTACTS: Contact[] = [
    { icon: <PhoneIcon />, label: '+7 (000) 000 00 00', href: 'tel:+70000000000' },
    { icon: <EmailOutlinedIcon />, label: 'example@urfu.ru', href: 'mailto:example@urfu.ru' },
    { icon: <TelegramIcon />, label: '@tgusertag', href: '#' },
];

export const ProfileUser = () => {
    return (
        <VStack spacing={4} className={styles['profileUser']}>
            <Image
                className={styles['profilePicture']}
                src={defaultProfilePicture}
                alt="Фотография пользователя"
                width={144}
                height={144}
            />

            <Typography variant="h3">Алиев Нихат</Typography>
            <Box>
                <Table className={styles['table']}>
                    <TableBody>
                        {TAGS.map((row, index) => (
                            <TableRow key={index} className={styles['tableRow']}>
                                <TableCell className={styles['tableCell']}>
                                    <Typography variant="body2" className={styles['greyText']}>
                                        {row.label}
                                    </Typography>
                                </TableCell>
                                <TableCell className={styles['tableCell']}>
                                    <Typography variant="body2">{row.value}</Typography>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Box>
            <BaseButton
                className={styles['button']}
                variant="contained"
                href={'/profile/edit'}
                endIcon={<ArrowForwardRoundedIcon />}
            >
                <Typography variant="body1">Редактировать профиль</Typography>
            </BaseButton>
            <VStack spacing={2}>
                <Typography variant="h4">Контакты</Typography>
                {CONTACTS.map((contact, index) => (
                    <HStack key={index} spacing={1} alignItems="center">
                        <Box className={styles['contactIcon']}>{contact.icon}</Box>
                        <RegularLink href={contact.href}>{contact.label}</RegularLink>
                    </HStack>
                ))}
            </VStack>
        </VStack>
    );
};
