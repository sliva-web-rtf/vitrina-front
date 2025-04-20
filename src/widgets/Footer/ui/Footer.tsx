'use client';

import telegramLogo from '@/shared/assets/telegram.svg';
import vkLogo from '@/shared/assets/vk.svg';
import { HStack, MailtoLink, SocialIcon } from '@/shared/ui';
import { Stack, Typography } from '@mui/material';
import styles from './Footer.module.scss';

export const Footer = () => (
    <Stack component="footer" className={styles.container}>
        <HStack
            justifyContent="space-between"
            gap={6}
            sx={theme => ({
                [theme.breakpoints.down('md')]: {
                    flexDirection: 'column',
                    gap: 4,
                },
            })}
        >
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
                <SocialIcon url="https://vk.com/project__it" icon={vkLogo} alt="Вконтакте" />
            </HStack>
        </HStack>

        <HStack
            justifyContent="space-between"
            gap={2}
            sx={theme => ({
                [theme.breakpoints.down('sm')]: {
                    flexDirection: 'column',
                },
            })}
        >
            <Stack spacing={1}>
                <Typography color="secondary">Почта</Typography>
                <MailtoLink email="project.irit@urfu.ru">
                    <Typography variant="h4" color="background.default">
                        project.irit@urfu.ru
                    </Typography>
                </MailtoLink>
            </Stack>

            <Stack
                spacing={1}
                textAlign="end"
                sx={theme => ({
                    [theme.breakpoints.down('sm')]: {
                        textAlign: 'unset',
                    },
                })}
            >
                <Typography color="secondary">Адрес</Typography>
                <Typography variant="h4" color="background.default">
                    Екатеринбург, ул. Мира 32
                </Typography>
            </Stack>
        </HStack>
    </Stack>
);
