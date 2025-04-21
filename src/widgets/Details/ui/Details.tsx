import classNames from './Details.module.scss';
import { useNavigate, useParams } from 'react-router-dom';
import { Box, Button, Stack, Typography } from '@mui/material';
import { useGetDetailsQuery } from '../api/detailsApi';
import { UserCard } from '@/entities/user';
import { Gallery } from '@/widgets/Gallery';
import { memo } from 'react';
import { DetailsEmpty, DetailsSkeleton } from '@/widgets/Details';
import { useAppDispatch } from '@/shared/hooks/useAppDispatch/useAppDispatch';
import { detailsActions } from '@/entities/project';
import { AppRoutes, RoutePath } from '@/app/providers/Router/config/routeConfig';

export const Details = memo(() => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const { id } = useParams();
    const { isFetching, data } = useGetDetailsQuery(parseInt(id!, 10));

    if (isFetching) {
        return <DetailsSkeleton />;
    }

    if (!data) {
        return <DetailsEmpty />;
    }

    return (
        <Box className={classNames.details}>
            <Stack className={classNames.col}>
                {import.meta.env.VITE_WITH_ADMIN === 'admin' && (
                    <Button
                        onClick={() => {
                            // TODO: пересмотреть решение с link
                            dispatch(detailsActions.changeEditableProject(data));
                            navigate(RoutePath[AppRoutes.Main]);
                        }}
                    >
                        Редактировать
                    </Button>
                )}
                <Stack className={classNames.block}>
                    <Stack className={classNames.mainBlock}>
                        <Typography variant="h2">{data.name}</Typography>
                        {data.customTemplate && (
                            <Box className="customTemplate" dangerouslySetInnerHTML={{ __html: data.customTemplate }} />
                        )}
                    </Stack>
                </Stack>
                {data.aim && (
                    <Stack className={classNames.block}>
                        <Typography variant="h3">Цель проекта</Typography>
                        <Typography>{data.aim}</Typography>
                    </Stack>
                )}
                {data.client && (
                    <Stack className={classNames.block}>
                        <Typography variant="h3">Заказчик</Typography>
                        <Typography>{data.client}</Typography>
                    </Stack>
                )}
            </Stack>
            <Stack className={classNames.col}>
                <Gallery images={data.contents} alt={data.name} />
                {data.videoUrl && (
                    <iframe
                        className={classNames.video}
                        src={`https://www.youtube.com/embed/${data.videoUrl}`}
                        title={`${data.name} video`}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                )}
                {data.users && data.users.length > 0 && (
                    <Stack spacing={2}>
                        <Typography variant="h3">Команда</Typography>
                        <Stack spacing={4}>
                            {data.users.map(user => (
                                <UserCard key={user.lastName + user.firstName} {...user} />
                            ))}
                        </Stack>
                    </Stack>
                )}
            </Stack>
        </Box>
    );
});
