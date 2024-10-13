import { ProjectCardAvatar, VStack } from '@/shared/ui';
import { Stack, Typography } from '@mui/material';
import Link from 'next/link';
import { memo } from 'react';
import type { Project } from '../..';
import classNames from './ProjectCard.module.scss';

interface ProjectCardProps {
    readonly project: Project;
}

export const ProjectCard = memo((props: ProjectCardProps) => {
    const { project } = props;
    return (
        <Link className="link-block" href={`/${project.id}`}>
            <Stack className={classNames.projectCard}>
                <ProjectCardAvatar className={classNames.image} logoSrc={project.previewImagePath ?? undefined} />
                <VStack p={3} spacing={4} justifyContent="space-between" height="100%">
                    <VStack spacing={2}>
                        <Typography variant="h3" className={classNames.clippedText}>
                            {project.name}
                        </Typography>
                        <Typography variant="subtitle2" className={classNames.clippedText}>
                            {project.description}
                        </Typography>
                    </VStack>
                    <VStack>
                        <Typography variant="subtitle1">Команда №4645</Typography>
                        <Typography variant="subtitle2" color="secondary">
                            Студенческий проект · <span>Завершен</span>
                        </Typography>
                    </VStack>
                </VStack>
            </Stack>
        </Link>
    );
});

ProjectCard.displayName = 'ProjectCard';
