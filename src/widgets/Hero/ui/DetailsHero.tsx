import { VStack } from '@/shared/ui';
import { Typography } from '@mui/material';
import { Hero } from './Hero';

interface DetailsHeroProps {
    name?: string;
    description?: string;
    contents?: string[];
}

export const DetailsHero = (props: DetailsHeroProps) => {
    const { name, description, contents } = props;

    return (
        <Hero>
            <VStack
                spacing={6}
                sx={{
                    position: 'relative',
                    width: '80%',
                    maxWidth: 'var(--page-width)',
                    maxHeight: '80%',
                }}
            >
                <VStack spacing={4}>
                    <Typography variant="h2">{name}</Typography>
                    <Typography variant="h3">{description}</Typography>
                </VStack>
            </VStack>
        </Hero>
    );
};
