'use client';

import { ConstructorInstrument, HStack, VStack } from '@/shared/ui';
import { Typography } from '@mui/material';
import filePath from '@/shared/assets/file-text.svg';
import photoPath from '@/shared/assets/photo.svg';
import videoPath from '@/shared/assets/video.svg';
import codePath from '@/shared/assets/code.svg';
import carouselPath from '@/shared/assets/carousel.svg';
import { Ability } from '@/shared/lib/types/constructor/ability';

export const SelectorIntrument = () => {
    const abilities: Array<Ability> = [
        { svgPath: filePath, mainInfo: { text: 'Текст', variant: 'h5' } },
        { svgPath: photoPath, mainInfo: { text: 'Изображение', variant: 'h5' } },
        { svgPath: videoPath, mainInfo: { text: 'Видео', variant: 'h5' } },
        { svgPath: codePath, mainInfo: { text: 'Код', variant: 'h5' } },
        { svgPath: carouselPath, mainInfo: { text: 'Карусель', variant: 'h5' } },
    ];

    return (
        <VStack sx={{ gap: '50px', width: '1100px' }}>
            <Typography variant="h4" textAlign="center">
                Начните создавать ваш проект:
            </Typography>
            <HStack sx={{ justifyContent: 'center', width: '100%', gap: '20px' }}>
                {abilities.map((ability, index) => (
                    <ConstructorInstrument key={index} svgPath={ability.svgPath} mainInfo={ability.mainInfo} />
                ))}
            </HStack>
        </VStack>
    );
};
