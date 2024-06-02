import classNames from './Details.module.scss';
import { useParams } from 'react-router-dom';
import { Stack, Typography } from '@mui/material';
import { ChipsList } from '@/shared/ui';
import { useGetDetailsQuery } from '../api/detailsApi';

export const Details = () => {
    const { id } = useParams();
    const { isFetching, data } = useGetDetailsQuery(parseInt(id!, 10));

    if (isFetching) {
        return 'loading';
    }

    if (!data) {
        return 'not found';
    }

    return (
        <Stack className={classNames.details}>
            <Stack className={classNames.block}>
                <ChipsList big items={['Исследования', 'Игры']} />
                <Stack className={classNames.mainBlock}>
                    <Typography variant="h2">{data.name}</Typography>
                    <Typography>{data.description}</Typography>
                </Stack>
            </Stack>
            <Stack>123</Stack>
        </Stack>
    );
};
