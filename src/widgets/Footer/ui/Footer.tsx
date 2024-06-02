import { Box, Stack, Typography } from '@mui/material';
import { memo } from 'react';
import styles from './Footer.module.scss';
import  vkLogoSrc from '@/shared/assets/vk.svg'
import  telegramLogoSrc from '@/shared/assets/telegram.svg'

export const Footer = memo(() => (
    <Box className={styles.container}>
        <Stack className={styles.contentWrapper} direction="row" justifyContent="space-between">
            <Stack className={styles.firstItem}>
                <Typography variant="h5" sx={{ fontWeight: 700 }}>
                    © ФГАОУ ВО «УрФУ имени первого Президента России Б.Н. Ельцина»
                </Typography>
                <Typography>Институт радиоэлектроники и информационных технологий - РТФ</Typography>
            </Stack>
            <Stack spacing={1}>
                <Typography sx={{color: 'var(--dim-font-color)'}}>Контакты</Typography>
                <a href="mailto:m.a.shesterov@urfu.ru">
                    m.a.shesterov@urfu.ru
                </a>
                <Typography>Екатеринбург, ул. Мира 32</Typography>
            </Stack>
            <Stack spacing={1}>
                <Typography sx={{color: 'var(--dim-font-color)'}}>Мы в социальных сетях</Typography>
                <Stack spacing={1} direction='row'>
                  <a className={styles.link} href="https://vk.com/project__it" target='_blank' rel="noreferrer" >
                    <img src={vkLogoSrc} alt="Вконтакте" />
                  </a>
                  <a className={styles.link} href="https://t.me/urfu_project" target='_blank' rel="noreferrer" >
                    <img src={telegramLogoSrc} alt="Телеграмм" />
                  </a>
                </Stack>
            </Stack>
        </Stack>
    </Box>
));
