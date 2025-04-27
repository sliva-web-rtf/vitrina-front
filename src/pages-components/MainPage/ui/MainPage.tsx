import { VStack } from '@/shared/ui';
import { Header } from '@/widgets/Header';
import { MainHero } from '@/widgets/Hero';
import { Showcase } from '@/widgets/Showcase';

function MainPage() {
    return (
        <VStack>
            <Header transparent />
            <MainHero />
            <Showcase />
        </VStack>
    );
}

export default MainPage;
