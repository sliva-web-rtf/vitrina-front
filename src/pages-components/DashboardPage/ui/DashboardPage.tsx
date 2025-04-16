import React from 'react';

import { DashboardHeader } from '@/widgets/DashboardHeader';
import { VStack } from '@/shared/ui';

import { HeroSection } from './HeroSection';
import { GoalSection } from './GoalSection';
import { TasksSection } from './TasksSection';
import { DistributionSection } from './DistributionSection';
import { PartnershipSection } from './PartnershipSection';

const DashboardPage = () => {
    return (
        <VStack gap={6}>
            <DashboardHeader />
            <HeroSection />
            <GoalSection />
            <PartnershipSection />
            <TasksSection />
            <DistributionSection />
        </VStack>
    );
};

export default DashboardPage;
