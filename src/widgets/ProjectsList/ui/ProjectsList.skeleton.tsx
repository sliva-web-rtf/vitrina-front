import { Box, Grid } from '@mui/material';
import { ProjectCardSkeleton } from '@/entities/project';

interface ProjectsListSkeletonProps {
    readonly amount: number;
}

export const ProjectsListSkeleton = (props: ProjectsListSkeletonProps) => {
    const { amount } = props;
    const items = Array.from({ length: amount }, (_, index) => `project-${index}`);

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2} alignItems="center">
                {items.map((item) => (
                    <Grid key={item} item xs={12} md={6} lg={4} xl={3}>
                        <ProjectCardSkeleton />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};
