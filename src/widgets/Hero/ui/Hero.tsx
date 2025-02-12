import { Box, Stack } from '@mui/material';
import styles from './Hero.module.scss';

interface HeroProps {
    children?: React.ReactNode;
}

export const Hero = (props: HeroProps) => {
    return (
        <Box className={styles['container']}>
            <Box className={styles['heroContainer']}>
                <Stack className={styles['hero']} alignItems="center" justifyContent="center">
                    <Box className={styles['heroFrontRound']} />
                    {props.children}
                </Stack>
            </Box>
        </Box>
    );
};
