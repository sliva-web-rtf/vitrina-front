import { VStack } from '@/shared/ui';
import { Typography } from '@mui/material';
import styles from './ShowcaseHeader.module.scss';

export const ShowcaseHeader = () => {
    return (
        <VStack className={styles.container} alignItems="center" paddingY={4}>
            <Typography variant="h2" textAlign="center" width="80%">
                <span>Лучшие из лучших</span> – проекты, которые получили признание на конкурсах, стали реальными
                стартапами или просто впечатлили своим потенциалом
            </Typography>
        </VStack>
    );
};
