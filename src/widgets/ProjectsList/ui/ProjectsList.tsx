import classNames from './ProjectsList.module.scss';
import { memo } from 'react';
import { Box } from '@mui/material';
import { useGetProjectsQuery } from '../api/projectsApi';
import { useSelector } from 'react-redux';
import { getFilter } from '@/features/filter';
import { ProjectsListSkeleton } from '@/widgets/ProjectsList/ui/ProjectsList.skeleton.tsx';
import { ProjectCard } from '@/entities/project';
import { ProjectsListEmpty } from '@/widgets/ProjectsList/ui/ProjectsList.empty.tsx';

export const ProjectsList = memo(() => {
    const filter = useSelector(getFilter);
    const { isFetching, data } = useGetProjectsQuery(filter);

    if (isFetching) {
        return <ProjectsListSkeleton amount={filter.pageSize / 2} />;
    }

    if (!data?.items?.length) {
        return <ProjectsListEmpty />;
    }

    return (
        <Box className={classNames.projectsList}>
            {data.items.map(item => (
                <ProjectCard key={item.name} {...item} />
            ))}
        </Box>
    );
});
