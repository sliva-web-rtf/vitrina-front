import gradient from '@/shared/assets/hero-gradient.svg';
import vectors from '@/shared/assets/hero-vectors.svg';
import { VStack } from '@/shared/ui';
import { Stack, Typography } from '@mui/material';
import Image from 'next/image';
import styles from './Hero.module.scss';

export const Hero = () => {
    return (
        <Stack className={styles.container} alignItems="center" justifyContent="center">
            <VStack spacing={4} width="50%" textAlign="center">
                <Typography variant="h1">
                    витрина
                    <br />
                    ирит-ртф
                </Typography>
                <Typography variant="h2">проекты, а не просто поделки</Typography>
            </VStack>
            <Image src={gradient} alt="" className={styles.gradient} />
            <Image src={vectors} alt="" className={styles.gradient} />
        </Stack>
    );
};
