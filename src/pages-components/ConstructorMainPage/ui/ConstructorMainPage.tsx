import React from 'react';

import { Header } from '@/widgets/Header';
import { ConstructorTemplatesList } from '@/widgets/ConstructorTemplatesList';
import { ProjectsList } from '@/widgets/ProjectsList';
import { VStack } from '@/shared/ui';
import { Box } from '@mui/material';

const ConstructorMainPage = () => {
    return (
        <VStack>
            <ConstructorTemplatesList />
            <Box sx={{ backgroundColor: 'white', margin: '0 -20px' }}>
                <ProjectsList />
            </Box>
        </VStack>
    );
};

export default ConstructorMainPage;
