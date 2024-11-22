import gradient from '@/shared/assets/details-hero.svg';
import { VStack } from '@/shared/ui';
import { Typography } from '@mui/material';
import Image from 'next/image';

import classNames from './Hero.module.scss';

interface DetailsHeroProps {
    name?: string;
    subtitle?: string;
}

export const DetailsHero = (props: DetailsHeroProps) => {
    const { name, subtitle } = props;

    return (
        <VStack className={classNames.detailsHero}>
            <VStack spacing={4} className={classNames.detailsHeroContent}>
                <Typography variant="h2">{name}</Typography>
                <Typography variant="h3">{subtitle}</Typography>
            </VStack>
            <Image src={gradient} alt="" className={classNames.gradient} />
        </VStack>
    );
};
