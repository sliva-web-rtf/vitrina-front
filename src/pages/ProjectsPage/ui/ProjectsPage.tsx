import { Stack, Typography } from '@mui/material';
import { memo } from 'react';
import logoSrc from '@/shared/assets/logo.png';
import styles from './ProjectsPage.module.scss';

const ProjectsPage = memo(() => (
    <Stack>
        <Stack direction="row" alignItems="center" justifyContent="space-between">
            <Typography variant="h1">Витрина проектов</Typography>
            {/* TODO: получить svg картинку */}
            <img className={styles.logo} src={logoSrc} />
        </Stack>
    </Stack>
));

export default ProjectsPage;
