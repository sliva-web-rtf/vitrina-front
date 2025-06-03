'use client';

import React from 'react';
import { HStack, VStack } from '@/shared/ui';
import { SortableBlockList } from '@/widgets/SortableBlockList';
import { ConstructorSideBar } from '@/widgets/ConstructorSideBar';
import { useSelector } from 'react-redux';
import { StateSchema } from '@/app/providers/StoreProvider/config/StateSchema';

function ConstructorEditorPage() {
    const sections = useSelector((state: StateSchema) => state.constructorProject.sections);

    return (
        <HStack spacing={3} justifyContent="center">
            <SortableBlockList sections={sections} />
            <ConstructorSideBar />
        </HStack>
    );
}

export default ConstructorEditorPage;
