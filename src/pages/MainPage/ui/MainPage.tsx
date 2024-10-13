'use client';
import { VStack } from '@/shared/ui';
import { Hero } from '@/widgets/Hero';
import { MainHeader } from '@/widgets/MainHeader';
import { Showcase } from '@/widgets/Showcase';

function MainPage() {
    return (
        <VStack>
            <MainHeader />
            <Hero />
            <Showcase />
        </VStack>
    );
}

export default MainPage;
