import gradient from '@/shared/assets/hero-gradient.svg';
import vectors from '@/shared/assets/hero-vectors.svg';
import { Stack } from '@mui/material';
import Image from 'next/image';
import styles from './Hero.module.scss';

interface HeroProps {
    children?: React.ReactNode;
}

export const Hero = (props: HeroProps) => {
    return (
        <Stack className={styles.container} alignItems="center" justifyContent="center">
            {props.children}
            <Image src={gradient} alt="" className={styles.gradient} />
            <Image src={vectors} alt="" className={styles.gradient} />
        </Stack>
    );
};
