import { Stack, Typography } from '@mui/material';
import { memo } from 'react';

export const DetailsEmpty = memo(() => (
    <Stack width="100%" height="100%" alignItems="center" justifyContent="center">
        <Typography variant="h3">Ничего не найдено</Typography>
    </Stack>
));
