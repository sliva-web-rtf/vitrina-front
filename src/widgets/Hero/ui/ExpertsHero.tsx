import { VStack } from '@/shared/ui';
import { Box, Typography } from '@mui/material';
import { Hero } from './Hero';

export const ExpertsHero = () => {
    return (
        <Hero>
            <VStack spacing={4} width="80%" textAlign="center">
                <Typography variant="h1">Эксперты</Typography>
            </VStack>
        </Hero>
    );
};
