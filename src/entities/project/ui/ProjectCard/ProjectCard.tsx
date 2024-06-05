import { Stack, Typography } from '@mui/material';
import classNames from './ProjectCard.module.scss';
import { ProjectCardAvatar } from '@/shared/ui';
import { Link } from 'react-router-dom';

interface ProjectCardProps {
    readonly id?: number;
    readonly name?: string;
    readonly description?: string;
    readonly imageUrl?: string;
    // readonly tags?: Array<string>;
}

export const ProjectCard = (props: ProjectCardProps) => {
    const { id, name, description, imageUrl } = props;
    return (
        <Link className="link-block" to={`/${id}`}>
            <Stack className={classNames.projectCard}>
                <ProjectCardAvatar className={classNames.image} logoSrc={imageUrl} />
                <Stack p={3} spacing={2}>
                    <Typography variant="h3" className={classNames.clippedTitle}>
                        {name}
                    </Typography>

                    <Typography variant="subtitle1" className={classNames.clippedText}>
                        {description}
                    </Typography>
                </Stack>
            </Stack>
        </Link>
    );
};
