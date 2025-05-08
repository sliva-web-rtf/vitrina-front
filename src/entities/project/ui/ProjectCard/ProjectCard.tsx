import Link from 'next/link';
import { memo } from 'react';
import { Tooltip, Typography } from '@mui/material';

import { ProjectCardAvatar, VStack } from '@/shared/ui';
import type { Project } from '../..';
import styles from './ProjectCard.module.scss';
import classNames from 'classnames';

interface ProjectCardProps {
    readonly project: Project;
}

export const ProjectCard = memo((props: ProjectCardProps) => {
    const { project } = props;
    return (
        <Link className="link-block" href={`/project/${project.id}`}>
            <VStack className={styles['projectCard']}>
                <ProjectCardAvatar className={styles['image']} logoSrc={project.previewImagePath ?? undefined} />
                <VStack className={styles['cardInfo']} p={3} spacing={4} justifyContent="space-between" height="50%">
                    <VStack spacing={2}>
                        <Tooltip title={project.name} placement="top">
                            <Typography variant="h3" className={styles['clippedName']}>
                                {project.name}
                            </Typography>
                        </Tooltip>
                        <Tooltip title={project.description} placement="top">
                            <Typography variant="subtitle2" className={styles['clippedDescr']}>
                                {project.description}
                            </Typography>
                        </Tooltip>
                    </VStack>
                </VStack>
            </VStack>
        </Link>
    );
});

ProjectCard.displayName = 'ProjectCard';
