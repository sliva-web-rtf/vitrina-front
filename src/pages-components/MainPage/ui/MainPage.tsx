import { VStack } from '@/shared/ui';
import { MainHero } from '@/widgets/Hero';
import { Showcase } from '@/widgets/Showcase';

function MainPage() {
    return (
        <VStack>
            <MainHero />
            <Showcase />
        </VStack>
    );
}

export default MainPage;
