import classNames from './ProjectsList.module.scss';
import { Box } from '@mui/material';
import { ProjectCardSkeleton } from '@/entities/project';
import { memo } from 'react';

interface ProjectsListSkeletonProps {
    readonly amount: number;
}

export const ProjectsListSkeleton = memo((props: ProjectsListSkeletonProps) => {
    const { amount } = props;
    const items = Array.from({ length: amount }, (_, index) => `project-${index}`);

    return (
        <Box className={classNames.projectsList}>
            {items.map(item => (
                <ProjectCardSkeleton key={item} />
            ))}
        </Box>
    );
});
