import { VStack } from '@/shared/ui';
import { ExpertsHeader } from '@/widgets/ExpertsHeader';
import { ExpertsShowcase } from '@/widgets/ExpertsShowcase';
import { ExpertsHero } from '@/widgets/Hero';
import React from 'react';

const ExpertsPage = () => {
    return (
        <VStack>
            <ExpertsHeader />
            <ExpertsHero />
            <ExpertsShowcase />
        </VStack>
    );
};

export default ExpertsPage;
