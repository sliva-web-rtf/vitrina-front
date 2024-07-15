'use client';

import { useEffect } from 'react';
import { Box, Grid } from '@mui/material';
import { useGetProjectsQuery } from '../api/projectsApi';
import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from '@/features/filter';
import { ProjectsListSkeleton } from '@/widgets/ProjectsList/ui/ProjectsList.skeleton';
import { ProjectCard } from '@/entities/project';
import { ProjectsListEmpty } from '@/widgets/ProjectsList/ui/ProjectsList.empty';
import { projectsListActions } from '@/widgets/ProjectsList';

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
