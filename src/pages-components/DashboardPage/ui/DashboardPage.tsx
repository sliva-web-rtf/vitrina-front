import React from 'react';

import { DashboardHeader } from '@/widgets/DashboardHeader';
import { VStack } from '@/shared/ui';

import { HeroSection } from './HeroSection';
import { GoalSection } from './GoalSection';
import { TasksSection } from './TasksSection';
import { DistributionSection } from './DistributionSection';
import { PartnershipSection } from './PartnershipSection';
import { StudentsAwaitSection } from './StudentsAwaitSection';

const DashboardPage = () => {
    return (
        <>
            <VStack spacing={6}>
                <DashboardHeader />
                <HeroSection />
                <GoalSection />
                <TasksSection />
                <DistributionSection />
                <PartnershipSection />
                <StudentsAwaitSection />
            </VStack>
        </>
    );
};

export default DashboardPage;
