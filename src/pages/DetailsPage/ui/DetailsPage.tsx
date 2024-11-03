import { VStack } from '@/shared/ui';
import { Details } from '@/widgets/Details';
import { DetailsHeader } from '@/widgets/DetailsHeader';
import { DetailsHero } from '@/widgets/Hero';
import { DetailsPageSchema } from '../model/types';

const DetailsPage = (props: DetailsPageSchema) => {
    const { name, description, subtitle } = props;

    return (
        <VStack spacing={6}>
            <DetailsHeader />
            <DetailsHero name={name} subtitle={description} />
            <Details {...props} />
        </VStack>
    );
};

export default DetailsPage;
