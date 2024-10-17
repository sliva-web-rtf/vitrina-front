import { VStack } from '@/shared/ui';
import { Details } from '@/widgets/Details';
import { DetailsHeader } from '@/widgets/DetailsHeader';
import { DetailsHero } from '@/widgets/Hero';
import { DetailsPageSchema } from '../model/types';
import styles from './DetailsPage.module.scss';

const DetailsPage = (props: DetailsPageSchema) => {
    const { name, description, subtitle } = props;

    return (
        <>
            <DetailsHeader />
            <VStack spacing={6} className={styles.container}>
                <DetailsHero name={name} subtitle={description} />
                <Details {...props} />
            </VStack>
        </>
    );
};

export default DetailsPage;
