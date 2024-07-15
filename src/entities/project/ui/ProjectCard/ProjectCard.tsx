import { Stack, Typography } from '@mui/material';
import classNames from './ProjectCard.module.scss';
import { ProjectCardAvatar } from '@/shared/ui';
import type { Project } from '../..';
import Link from 'next/link';
import { memo } from 'react';

interface ProjectCardProps {
    readonly project: Project;
}

export const ProjectCard = memo((props: ProjectCardProps) => {
    const { project } = props;
    return (
        <Link className="link-block" href={`/${project.id}`}>
            <Stack className={classNames.projectCard}>
                <ProjectCardAvatar className={classNames.image} logoSrc={project.previewImagePath ?? undefined} />
                <Stack p={3} spacing={2}>
                    <Typography variant="h3" className={classNames.clippedText}>
                        {project.name}
                    </Typography>
                    <Typography variant="subtitle1" className={classNames.clippedText}>
                        {project.description}
                    </Typography>
                </Stack>
            </Stack>
        </Link>
    );
});

ProjectCard.displayName = 'ProjectCard';
