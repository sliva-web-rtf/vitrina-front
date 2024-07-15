'use client';
import { Box, Stack, Typography } from '@mui/material';
import logoSrc from '@/shared/assets/logo.svg';
import styles from './MainPage.module.scss';
import Image from 'next/image';
import { Showcase } from '@/widgets/Showcase';

function MainPage() {
    return (
        <Stack spacing={10}>
            <Box
                sx={(theme) => ({
                    display: 'grid',
                    [theme.breakpoints.up('sm')]: {
                        gridTemplateColumns: 'auto auto',
                        columnGap: theme.spacing(3),
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    },
                    [theme.breakpoints.down('sm')]: {
                        display: 'flex',
                        flexDirection: 'column-reverse',
                        rowGap: theme.spacing(3),
                        alignItems: 'center',
                    },
                })}
            >
                <Stack spacing={2}>
                    <Typography variant="h2">Витрина проектов ИРИТ-РТФ</Typography>
                    <Typography sx={{ fontStyle: 'italic' }} variant="h4">
                        Проекты, а не просто поделки
                    </Typography>
                </Stack>
                <Image src={logoSrc} className={styles.logo} alt="Логотип" />
            </Box>
            <Showcase />
        </Stack>
    );
}

export default MainPage;
