import gradient from '@/shared/assets/details-hero.svg';
import { BaseChip, HStack, VStack } from '@/shared/ui';
import { Typography } from '@mui/material';
import Image from 'next/image';

import classNames from './Hero.module.scss';

interface DetailsHeroProps {
    name?: string;
    subtitle?: string;
    type?: string;
    sphere?: string;
}

export const DetailsHero = (props: DetailsHeroProps) => {
    const { type, sphere, name, subtitle } = props;

    return (
        <VStack className={classNames.detailsHero}>
            <VStack spacing={4} className={classNames.detailsHeroContent}>
                <HStack spacing={1}>
                    {Boolean(type) && <BaseChip label={type} />}
                    {Boolean(sphere) && <BaseChip label={sphere} />}
                </HStack>
                <Typography variant="h2">{name}</Typography>
                <Typography variant="h3">{subtitle}</Typography>
            </VStack>
            <Image src={gradient} alt="" className={classNames.gradient} />
        </VStack>
    );
};
