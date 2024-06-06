import { Box, Stack, Typography } from '@mui/material';
import { memo } from 'react';
import logoSrc from '@/shared/assets/logo.svg';
import { Showcase } from '@/widgets/Showcase';
import styles from './MainPage.module.scss';

const MainPage = memo(() => (
    <Stack spacing={10}>
        <Box
            sx={theme => ({
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
            <Typography
                sx={theme => ({
                    [theme.breakpoints.up('xl')]: {
                        fontSize: 96,
                    },
                    [theme.breakpoints.up('lg')]: {
                        fontSize: 64,
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
