import { VStack } from '@/shared/ui';
import { Details } from '@/widgets/Details';
import { DetailsHeader } from '@/widgets/DetailsHeader';
import { Box } from '@mui/material';
import styles from './DetailsPage.module.scss';

const DetailsPage = () => (
    <Box>
        <DetailsHeader />
        <VStack className={styles.container}>
            <Details />
        </VStack>
    </Box>
);

export default DetailsPage;
