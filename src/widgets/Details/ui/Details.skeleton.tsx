import classNames from './Details.module.scss';
import { Skeleton, Stack, Typography } from '@mui/material';
import { GallerySkeleton } from '@/widgets/Gallery';
import { UserCardSkeleton } from '@/entities/user';

export const DetailsSkeleton = () => (
    <Stack className={classNames.details}>
        <Stack className={classNames.col}>
            <Stack className={classNames.block}>
                <Stack className={classNames.mainBlock}>
                    <Typography variant="h2">
                        <Skeleton width="70%" />
                        <Skeleton width="90%" />
                        <Skeleton width="80%" />
                    </Typography>
                    <Typography>
                        <Skeleton width="70%" />
                        <Skeleton width="90%" />
                        <Skeleton width="80%" />
                        <Skeleton width="50%" />
                        <Skeleton width="80%" />
                        <Skeleton width="60%" />
                    </Typography>
                </Stack>
            </Stack>
            <Stack className={classNames.block}>
                <Typography variant="h3">
                    <Skeleton width="40%" />
                </Typography>
                <Typography>
                    <Skeleton width="70%" />
                    <Skeleton width="90%" />
                    <Skeleton width="80%" />
                </Typography>
            </Stack>
            <Stack className={classNames.block}>
                <Typography variant="h3">
                    <Skeleton width="30%" />
                </Typography>
                <Typography>
                    <Skeleton width="80%" />
                    <Skeleton width="50%" />
                    <Skeleton width="70%" />
                </Typography>
            </Stack>
            <Stack className={classNames.block}>
                <Typography variant="h3">
                    <Skeleton width="30%" />
                </Typography>
                <Typography>
                    <Skeleton width="70%" />
                </Typography>
            </Stack>
        </Stack>
        <Stack className={classNames.col}>
            <GallerySkeleton />
            <Stack className={classNames.mainBlock}>
                <Typography variant="h3">
                    <Skeleton width="30%" />
                </Typography>
                <UserCardSkeleton />
                <UserCardSkeleton />
                <UserCardSkeleton />
                <UserCardSkeleton />
            </Stack>
        </Stack>
    </Stack>
);
