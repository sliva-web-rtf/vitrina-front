import { VStack } from '@/shared/ui';
import { MainHero } from '@/widgets/Hero';
import { MainHeader } from '@/widgets/MainHeader';
import { Showcase } from '@/widgets/Showcase';

function MainPage() {
    return (
        <VStack>
            <MainHeader />
            <MainHero />
            <Showcase />
        </VStack>
    );
}

export default MainPage;
