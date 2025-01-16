import { VStack } from '@/shared/ui';
import { Typography } from '@mui/material';
import { Hero } from './Hero';

export const MainHero = () => {
    return (
        <Hero>
            <VStack spacing={4} width="80%" textAlign="center">
                <Typography variant="h1">
                    Витрина
                    <br />
                    ИРИТ-РТФ
                </Typography>
                <Typography variant="h2">Проекты, а не просто поделки</Typography>
            </VStack>
        </Hero>
    );
};
