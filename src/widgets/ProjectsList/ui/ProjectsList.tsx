import { ProjectCard } from '@/entities/project';
import { getFilter } from '@/features/filter';
import { projectsListActions } from '@/widgets/ProjectsList';
import { ProjectsListEmpty } from '@/widgets/ProjectsList/ui/ProjectsList.empty';
import { ProjectsListSkeleton } from '@/widgets/ProjectsList/ui/ProjectsList.skeleton';
import { Box, Grid } from '@mui/material';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useGetProjectsQuery } from '../api/projectsApi';

export const ProjectsList = () => {
    const dispatch = useDispatch();
    const filter = useSelector(getFilter);
    const { isFetching, data } = useGetProjectsQuery(filter);

    useEffect(() => {
        dispatch(projectsListActions.setTotalPages(data?.metadata?.totalPages || 1));
    }, [data?.metadata?.totalPages, dispatch]);

    if (isFetching) {
        return <ProjectsListSkeleton amount={filter.pageSize / 2} />;
    }

    if (!data?.items?.length) {
        return <ProjectsListEmpty />;
    }

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2} alignItems="center">
                {data.items.map((item) => (
                    <Grid key={item.id} item xs={12} md={6} lg={4} xl={3}>
                        <ProjectCard project={item} />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};
