import { DetailsPageSchema } from '@/shared/services';
import { VStack } from '@/shared/ui';
import { Details } from '@/widgets/Details';
import { DetailsHeader } from '@/widgets/DetailsHeader';
import { DetailsHero } from '@/widgets/Hero';

const DetailsPage = (props: DetailsPageSchema) => {
    const { name, description, type, sphere } = props;

    return (
        <VStack spacing={6}>
            <DetailsHeader />
            <DetailsHero name={name} subtitle={description} type={type} sphere={sphere} />
            <Details {...props} />
        </VStack>
    );
};

export default DetailsPage;
