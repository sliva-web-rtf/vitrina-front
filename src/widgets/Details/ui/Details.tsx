import { DetailsPageSchema } from '@/pages/DetailsPage';
import { DetailsBlock, VideoFrame, VStack } from '@/shared/ui';
import { Gallery } from '@/widgets/Gallery';
import { Team } from '@/widgets/Team';
import { Box } from '@mui/material';
import classNames from './Details.module.scss';

export const Details = (props: DetailsPageSchema) => {
    const { name, markdown, aim, client, contents, videoUrl, users, subtitle } = props;

    return (
        <VStack className={classNames.container}>
            <VStack spacing={6} className={classNames.details}>
                {markdown && (
                    <DetailsBlock title="Полезная информация">
                        <Box className="customTemplate" dangerouslySetInnerHTML={{ __html: markdown }} />
                    </DetailsBlock>
                )}
                {aim && <DetailsBlock title="Цель проекта" text={aim} />}
                {client && <DetailsBlock title="Заказчик" text={client} />}

                {contents?.length && (
                    <DetailsBlock title="Галерея" noBackground noPadding>
                        <Gallery images={contents} />
                    </DetailsBlock>
                )}

                {videoUrl && (
                    <DetailsBlock title="Видео" noBackground noPadding>
                        <VideoFrame url={videoUrl} name={name} className={classNames.video} />
                    </DetailsBlock>
                )}

                <DetailsBlock title="Команда проекта" noBackground noPadding>
                    <Team team={users} />
                </DetailsBlock>
            </VStack>
        </VStack>
    );
};
