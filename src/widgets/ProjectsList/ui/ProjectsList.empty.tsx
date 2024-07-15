import { Stack } from '@mui/material';
import { memo } from 'react';
import { EmptyOverlay } from '@/shared/ui';

export const ProjectsListEmpty = memo(() => {
    return (
        <Stack alignItems="center" justifyContent="center" height="var(--card-height)">
            <EmptyOverlay text="Ничего не найдено" />
        </Stack>
    );
});

ProjectsListEmpty.displayName = 'ProjectsListEmpty';
