import { VStack } from '@/shared/ui';
import { Typography } from '@mui/material';
import styles from './ShowcaseHeader.module.scss';

export const ShowcaseHeader = () => {
    return (
        <VStack className={styles.container} alignItems="center">
            <Typography variant="h2" textAlign="center">
                <span>Лучшие из лучших</span> – проекты, которые получили признание на конкурсах, стали реальными
                стартапами или просто впечатлили своим потенциалом
            </Typography>
        </VStack>
    );
};
