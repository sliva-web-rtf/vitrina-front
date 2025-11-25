'use client';

import React from 'react';
import { useSelector } from 'react-redux';

import { HStack } from '@/shared/ui';
import { ConstructorSectionsList } from '@/widgets/ConstructorSectionsList';
import { ConstructorSideBar } from '@/widgets/ConstructorSideBar';
import { StateSchema } from '@/app/providers/StoreProvider/config/StateSchema';

function ConstructorEditorPage() {
    const sections = useSelector((state: StateSchema) => state.constructorProject.sections);

    return (
        <HStack spacing={3} justifyContent="center">
            <ConstructorSectionsList sections={sections} />
            <ConstructorSideBar />
        </HStack>
    );
}

export default ConstructorEditorPage;
