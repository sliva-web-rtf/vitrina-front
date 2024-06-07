import { Stack, Typography } from '@mui/material';
import classNames from './ProjectCard.module.scss';
import { ProjectCardAvatar } from '@/shared/ui';
import { Link } from 'react-router-dom';
import type { Project } from '../..';

interface ProjectCardProps {
    readonly project: Project;
}

export const ProjectCard = (props: ProjectCardProps) => {
    const { project } = props;
    return (
        <Link className="link-block" to={`/${project.id}`}>
            <Stack className={classNames.projectCard}>
                <ProjectCardAvatar className={classNames.image} logoSrc={project.imageUrl} />
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
};
