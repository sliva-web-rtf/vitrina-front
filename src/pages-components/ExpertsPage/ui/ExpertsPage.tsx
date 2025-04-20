import { VStack } from '@/shared/ui';
import { ExpertsShowcase } from '@/widgets/ExpertsShowcase';
import { ExpertsHero } from '@/widgets/Hero';
import React from 'react';

const ExpertsPage = () => {
    return (
        <VStack>
            <ExpertsHero />
            <ExpertsShowcase />
        </VStack>
    );
};

export default ExpertsPage;
