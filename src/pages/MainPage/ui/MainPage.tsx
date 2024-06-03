import { Box, Stack, Typography } from '@mui/material';
import { memo } from 'react';
import logoSrc from '@/shared/assets/logo.png';
import { Showcase } from '@/widgets/Showcase';
import styles from './MainPage.module.scss';

const MainPage = memo(() => (
    <Stack spacing={10}>
        <Box
            sx={theme => ({
                display: 'flex',
                [theme.breakpoints.up('sm')]: {
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                },
                [theme.breakpoints.down('sm')]: {
                    flexDirection: 'column-reverse',
                },
            })}
        >
            <Typography
                sx={theme => ({
                    [theme.breakpoints.up('xl')]: {
                        fontSize: 96,
                    },
                    [theme.breakpoints.up('lg')]: {
                        fontSize: 64,
                    },
                    [theme.breakpoints.up('md')]: {
                        fontSize: 48,
                    },
                    [theme.breakpoints.up('sm')]: {
                        fontSize: 48,
                    },
                    [theme.breakpoints.up('xs')]: {
                        fontSize: 32,
                    },
                })}
                variant="h1"
            >
                Витрина проектов
            </Typography>
            {/* TODO: получить svg картинку */}
            <img src={logoSrc} className={styles.logo} alt="Логотип" />
        </Box>
        <Showcase />
    </Stack>
));

export default MainPage;
