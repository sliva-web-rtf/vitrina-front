import { Stack, Typography } from '@mui/material';
import { memo } from 'react';
import logoSrc from '@/shared/assets/logo.png';
import styles from './ProjectsPage.module.scss';
import { ProjectsList } from '@/widgets/ProjectsList';

const ProjectsPage = memo(() => (
    <Stack spacing={10}>
        <Stack direction="row" alignItems="center" justifyContent="space-between">
            <Typography variant="h1">Витрина проектов</Typography>
            {/* TODO: получить svg картинку */}
            <img className={styles.logo} src={logoSrc} />
        </Stack>
        <ProjectsList />
    </Stack>
));

export default ProjectsPage;
