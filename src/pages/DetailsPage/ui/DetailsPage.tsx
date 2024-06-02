import { BackButton } from '@/features/backButton';
import { Stack } from '@mui/material';
import { memo } from 'react';
import { Details } from '@/widgets/Details';

const DetailsPage = memo(() => (
    <Stack spacing={10}>
        <BackButton />
        <Details />
    </Stack>
));

export default DetailsPage;
