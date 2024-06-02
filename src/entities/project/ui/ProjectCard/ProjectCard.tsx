import { Stack, Typography } from '@mui/material';
import classNames from './ProjectCard.module.scss';
import { ChipsList, ProjectCardAvatar } from '@/shared/ui';
import { Link } from 'react-router-dom';

interface ProjectCardProps {
    readonly id?: number;
    readonly name?: string;
    readonly description?: string;
    readonly tags?: Array<string>;
}

export const ProjectCard = (props: ProjectCardProps) => {
    const { id, name, description, tags } = props;

    return (
        <Link className="link-block" to={`/${id}`}>
            <Stack className={classNames.projectCard}>
                <ProjectCardAvatar height="245px" />
                <Stack p={3} spacing={2}>
                    <ChipsList items={tags} />
                    <Typography variant="h3" className={classNames.clipped}>
                        {name}
                    </Typography>

                    <Typography variant="subtitle1" className={classNames.clipped}>
                        {description}
                    </Typography>
                </Stack>
            </Stack>
        </Link>
    );
};
