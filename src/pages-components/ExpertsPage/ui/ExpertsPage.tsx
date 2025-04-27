import { VStack } from '@/shared/ui';
import { ExpertsShowcase } from '@/widgets/ExpertsShowcase';
import { Header } from '@/widgets/Header';
import { ExpertsHero } from '@/widgets/Hero';
import React from 'react';

const ExpertsPage = () => {
    return (
        <VStack>
            <Header transparent />
            <ExpertsHero />
            <ExpertsShowcase />
        </VStack>
    );
};

export default ExpertsPage;
