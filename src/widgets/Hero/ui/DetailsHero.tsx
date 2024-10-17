import { VStack } from '@/shared/ui';
import { Typography } from '@mui/material';
import { Hero } from './Hero';
import styles from './Hero.module.scss';

interface DetailsHeroProps {
    name?: string;
    subtitle?: string;
}

export const DetailsHero = (props: DetailsHeroProps) => {
    const { name, subtitle } = props;

    return (
        <Hero>
            <VStack spacing={6} className={styles.detailsHero}>
                <VStack spacing={4}>
                    <Typography variant="h2">{name}</Typography>
                    <Typography variant="h3">{subtitle}</Typography>
                </VStack>
            </VStack>
        </Hero>
    );
};
