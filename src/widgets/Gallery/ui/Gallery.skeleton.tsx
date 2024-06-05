import { Skeleton, Stack } from '@mui/material';
import { memo } from 'react';
import classNames from './Gallery.module.scss';

export const GallerySkeleton = memo(() => {
    return (
        <Stack className={classNames.gallery}>
            <Skeleton variant="rounded" className={classNames.mainImage} />
            <Stack className={classNames.thumbnails}>
                <Skeleton variant="rounded" className={classNames.thumbnail} />
                <Skeleton variant="rounded" className={classNames.thumbnail} />
                <Skeleton variant="rounded" className={classNames.thumbnail} />
                <Skeleton variant="rounded" className={classNames.thumbnail} />
            </Stack>
        </Stack>
    );
});
