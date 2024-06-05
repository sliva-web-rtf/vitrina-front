import { Skeleton, Stack, Typography } from '@mui/material';
import classNames from './ProjectCard.module.scss';

export const ProjectCardSkeleton = () => {
    return (
        <Stack className={classNames.projectCard}>
            <Skeleton
                className={classNames.image}
                variant="rectangular"
                sx={theme => ({
                    width: '100%',
                    borderTopLeftRadius: theme.spacing(2),
                    borderTopRightRadius: theme.spacing(2),
                })}
            />
            <Stack p={3} spacing={2}>
                {/*<ChipsListSkeleton />*/}
                <Typography variant="h3">
                    <Skeleton />
                    <Skeleton width="70%" />
                    <Skeleton width="90%" />
                </Typography>
                <Typography variant="subtitle1">
                    <Skeleton width="70%" />
                    <Skeleton width="90%" />
                    <Skeleton width="90%" />
                    <Skeleton width="80%" />
                </Typography>
            </Stack>
        </Stack>
    );
};
