'use client';

import telegramLogo from '@/shared/assets/telegram.svg';
import whatsappLogo from '@/shared/assets/whatsapp.svg';
import { HStack, SocialIcon } from '@/shared/ui';
import { Stack, Typography } from '@mui/material';
import Link from 'next/link';
import styles from './Footer.module.scss';

export const Footer = () => (
    <Stack component="footer" className={styles.container}>
        <HStack justifyContent="space-between" spacing={6}>
            <Stack spacing={1}>
                <Typography variant="h3" color="background.default">
                    Институт радиоэлектроники
                    <br />и информационных технологий - РТФ
                </Typography>
                <Typography color="secondary">
                    © ФГАОУ ВО «УрФУ имени первого Президента России Б.Н. Ельцина»
                </Typography>
            </Stack>
            <HStack spacing={2}>
                <SocialIcon url="https://t.me/urfu_project" icon={telegramLogo} alt="Телеграм" />
                <SocialIcon url="https://vk.com/project__it" icon={whatsappLogo} alt="Whats App" />
                <SocialIcon url="https://vk.com/project__it" icon={telegramLogo} alt="Вконтакте" />
            </HStack>
        </HStack>

        <HStack justifyContent="space-between">
            <Stack spacing={1}>
                <Typography color="secondary">Почта</Typography>
                <Link href="mailto:project.irit@urfu.ru м">
                    <Typography variant="h4" color="background.default">
                        project.irit@urfu.ru
                    </Typography>
                </Link>
            </Stack>

            <Stack spacing={1} textAlign="end">
                <Typography color="secondary">Адрес</Typography>
                <Typography variant="h4" color="background.default">
                    Екатеринбург, ул. Мира 32
                </Typography>
            </Stack>
        </HStack>
    </Stack>
);
