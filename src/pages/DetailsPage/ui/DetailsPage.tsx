import { Stack } from '@mui/material';
import { BackButton } from '@/features/backButton';
import { Details } from '@/widgets/Details';

const DetailsPage = () => (
    <Stack spacing={10}>
        <BackButton />
        <Details />
    </Stack>
);

export default DetailsPage;
