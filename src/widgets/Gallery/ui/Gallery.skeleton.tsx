import { Skeleton, Stack } from '@mui/material';
import { memo } from 'react';
import classNames from './Gallery.module.scss';

export const GallerySkeleton = memo(() => {
    return (
        <Stack className={classNames.gallery}>
            <Skeleton variant="rounded" className={classNames.mainImage} />
            <Stack className={classNames.thumbnails}>
                <Skeleton variant="rounded" width="100%" height="110px" />
                <Skeleton variant="rounded" width="100%" height="110px" />
                <Skeleton variant="rounded" width="100%" height="110px" />
                <Skeleton variant="rounded" width="100%" height="110px" />
                <Skeleton variant="rounded" width="100%" height="110px" />
            </Stack>
        </Stack>
    );
});
