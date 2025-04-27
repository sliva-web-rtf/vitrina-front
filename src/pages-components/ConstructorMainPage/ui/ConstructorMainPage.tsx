import { ConstructorTemplatesList } from '@/features/constructor';
import { VStack } from '@/shared/ui';
import React from 'react';

const ConstructorMainPage = () => {
    return (
        <VStack>
            <ConstructorTemplatesList />
        </VStack>
    );
};

export default ConstructorMainPage;
