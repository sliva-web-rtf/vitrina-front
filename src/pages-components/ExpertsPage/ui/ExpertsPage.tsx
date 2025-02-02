import { VStack } from '@/shared/ui';
import { ExpertsShowcase } from '@/widgets/ExpertsShowcase';
import { ExpertsHero } from '@/widgets/Hero';
import { MainHeader } from '@/widgets/MainHeader';
import { Showcase } from '@/widgets/Showcase';
import React from 'react';

const ExpertsPage = () => {
    return (
        <VStack spacing={6}>
            <MainHeader />
            <ExpertsHero />
            <ExpertsShowcase />
        </VStack>
    );
};

export default ExpertsPage;
