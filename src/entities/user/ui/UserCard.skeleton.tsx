import classNames from './UserCard.module.scss';
import { Skeleton, Stack, Typography } from '@mui/material';
import { ChipsListSkeleton } from '@/shared/ui';
import { memo } from 'react';

export const UserCardSkeleton = memo(() => {
    return (
        <Stack className={classNames.card}>
            <Skeleton variant="rounded" sx={{ width: 80, height: 80 }} />
            <Stack className={classNames.content}>
                <ChipsListSkeleton />
                <Stack>
                    <Typography variant="h5">
                        <Skeleton width="300px" />
                    </Typography>
                    <Typography color="secondary" variant="subtitle1">
                        <Skeleton width="70%" />
                    </Typography>
                </Stack>
            </Stack>
        </Stack>
    );
});

UserCardSkeleton.displayName = 'UserCardSkeleton';
