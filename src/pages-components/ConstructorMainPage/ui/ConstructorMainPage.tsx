import React from 'react';

import { Header } from '@/widgets/Header';
import { ProjectsList } from '@/widgets/ProjectsList';
import { BaseButton, HStack, VStack } from '@/shared/ui';
import { Typography } from '@mui/material';

const ConstructorMainPage = () => {
    return (
        <VStack>
            <Header />
            <HStack justifyContent="space-between" alignItems="center" padding="16px 32px">
                <Typography variant="h3">Мои Проекты</Typography>
                <BaseButton href="/constructor/new" variant="contained" sx={{ padding: '12px 24px !important' }}>
                    Создать проект
                </BaseButton>
            </HStack>
            <ProjectsList />
        </VStack>
    );
};

export default ConstructorMainPage;
