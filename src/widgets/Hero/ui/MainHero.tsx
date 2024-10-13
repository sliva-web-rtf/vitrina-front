import { VStack } from '@/shared/ui';
import { Typography } from '@mui/material';
import { Hero } from './Hero';

export const MainHero = () => {
    return (
        <Hero>
            <VStack spacing={4} width="50%" textAlign="center">
                <Typography variant="h1">
                    витрина
                    <br />
                    ирит-ртф
                </Typography>
                <Typography variant="h2">проекты, а не просто поделки</Typography>
            </VStack>
        </Hero>
    );
};
