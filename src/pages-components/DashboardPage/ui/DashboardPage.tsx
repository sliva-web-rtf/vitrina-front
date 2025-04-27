import React from 'react';

import { VStack } from '@/shared/ui';

import { HeroSection } from './HeroSection';
import { GoalSection } from './GoalSection';
import { TasksSection } from './TasksSection';
import { DistributionSection } from './DistributionSection';
import { PartnershipSection } from './PartnershipSection';
import { Header } from '@/widgets/Header';

const DashboardPage = () => {
    return (
        <VStack spacing={6}>
            <Header />
            <HeroSection />
            <GoalSection />
            <PartnershipSection />
            <TasksSection />
            <DistributionSection />
        </VStack>
    );
};

export default DashboardPage;
