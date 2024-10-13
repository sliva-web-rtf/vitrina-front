'use client';

import { DetailsBlock, VideoFrame, VStack } from '@/shared/ui';
import { DetailsEmpty, DetailsSkeleton } from '@/widgets/Details';
import { Gallery } from '@/widgets/Gallery';
import { DetailsHero } from '@/widgets/Hero';
import { Team } from '@/widgets/Team';
import { Box } from '@mui/material';
import { useParams } from 'next/navigation';
import { memo } from 'react';
import { useGetDetailsQuery } from '../api/detailsApi';
import classNames from './Details.module.scss';

function DetailsWidget() {
    const params = useParams<{ projectId: string }>();
    const { isFetching, data } = useGetDetailsQuery(Number(params!.projectId));

    if (isFetching) {
        return <DetailsSkeleton />;
    }

    if (!data) {
        return <DetailsEmpty />;
    }

    return (
        <>
            <DetailsHero name={data.name} description={data.description} />
            <VStack className={classNames.details}>
                {data.customTemplate && (
                    <DetailsBlock title="Полезная информация">
                        <Box className="customTemplate" dangerouslySetInnerHTML={{ __html: data.customTemplate }} />
                    </DetailsBlock>
                )}
                {data.aim && <DetailsBlock title="Цель проекта" text={data.aim} />}
                {data.client && <DetailsBlock title="Заказчик" text={data.client} />}

                {data.contents?.length && (
                    <DetailsBlock title="Галерея" noBackground noPadding>
                        <Gallery images={data.contents} alt={data.name} />
                    </DetailsBlock>
                )}

                {data.videoUrl && (
                    <DetailsBlock title="Видео" noBackground noPadding>
                        <VideoFrame url={data.videoUrl} name={data.name} className={classNames.video} />
                    </DetailsBlock>
                )}

                <DetailsBlock title="Команда проекта" noBackground noPadding>
                    <Team team={data.users} />
                </DetailsBlock>
            </VStack>
        </>
    );
}

export const Details = memo(DetailsWidget);
