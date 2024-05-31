import classNames from './ProjectsList.module.scss';
import { memo } from 'react';
import { Stack } from '@mui/material';
import { Filter } from '@/features/Filter';

export const ProjectsList = memo(() => {
    console.log('list');

    return (
        <Stack className={classNames.ProjectsList}>
            <Filter />
        </Stack>
    );
});
