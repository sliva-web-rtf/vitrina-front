import { Skeleton, Stack, Typography } from '@mui/material';
import classNames from './ProjectCard.module.scss';
import { ChipsListSkeleton } from '@/shared/ui';

export const ProjectCardSkeleton = () => {
    return (
        <Stack className={classNames.projectCard}>
            <Skeleton
                variant="rectangular"
                sx={theme => ({
                    width: '100%',
                    height: '245px',
                    borderTopLeftRadius: theme.spacing(2),
                    borderTopRightRadius: theme.spacing(2),
                })}
            />
            <Stack p={3} spacing={2}>
                <ChipsListSkeleton />
                <Typography variant="h3">
                    <Skeleton />
                    <Skeleton width="70%" />
                    <Skeleton width="90%" />
                </Typography>
                <Typography variant="subtitle1">
                    <Skeleton width="70%" />
                    <Skeleton width="90%" />
                    <Skeleton width="90%" />
                </Typography>
            </Stack>
        </Stack>
    );
};
