import { Stack, Typography } from '@mui/material';
import { memo } from 'react';
import logoSrc from '@/shared/assets/logo.png';
import { Showcase } from '@/widgets/Showcase';

const MainPage = memo(() => (
    <Stack spacing={10}>
        <Stack direction="row" alignItems="center" justifyContent="space-between">
            <Typography variant="h1">Витрина проектов</Typography>
            {/* TODO: получить svg картинку */}
            <img src={logoSrc} alt="123" />
        </Stack>
        <Showcase />
    </Stack>
));

export default MainPage;
