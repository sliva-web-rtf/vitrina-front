import React from 'react';

import { Header } from '@/widgets/Header';
import { ConstructorTemplatesList } from '@/widgets/ConstructorTemplatesList';
import { ProjectsList } from '@/widgets/ProjectsList';
import { VStack } from '@/shared/ui';

const ConstructorMainPage = () => {
    return (
        <VStack>
            <Header />
            <ConstructorTemplatesList />
            <ProjectsList />
        </VStack>
    );
};

export default ConstructorMainPage;
