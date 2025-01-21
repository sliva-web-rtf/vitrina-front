import styles from './CompactHero.module.scss';

import Image from 'next/image';

import { VStack, HStack, BaseChip } from '@/shared/ui';
import { Typography } from '@mui/material';

import bgGradient from '@/shared/assets/details-hero.svg';

interface CompactHeroProps {
    title?: string;
    subtitle?: string;
    tags: string[];
}

export const CompactHero = (props: CompactHeroProps) => {
    const { title, subtitle, tags } = props;

    return (
        <VStack className={styles['compactHero']}>
            <VStack spacing={4} className={styles['compactHeroContent']}>
                <HStack spacing={1}>
                    {tags.map((tag, index) => (
                        <BaseChip key={index} label={tag} />
                    ))}
                </HStack>
                {title && <Typography variant="h2">{title}</Typography>}
                {subtitle && <Typography variant="h3">{subtitle}</Typography>}
            </VStack>
            <Image src={bgGradient} alt="" className={styles['gradient']} />
        </VStack>
    );
};
