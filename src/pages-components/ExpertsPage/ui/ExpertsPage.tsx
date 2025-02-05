import { VStack } from '@/shared/ui';
import { ExpertsShowcase } from '@/widgets/ExpertsShowcase';
import { ExpertsHero } from '@/widgets/Hero';
import { MainHeader } from '@/widgets/MainHeader';
import React from 'react';

const ExpertsPage = () => {
    return (
        <VStack>
            <MainHeader />
            <ExpertsHero />
            <ExpertsShowcase />
        </VStack>
    );
};

export default ExpertsPage;
