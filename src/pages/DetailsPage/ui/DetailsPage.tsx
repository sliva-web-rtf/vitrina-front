import { VStack } from '@/shared/ui';
import { Details } from '@/widgets/Details';
import { DetailsHeader } from '@/widgets/DetailsHeader';

const DetailsPage = () => (
    <VStack>
        <DetailsHeader />
        <Details />
    </VStack>
);

export default DetailsPage;
