import { DetailsPageSchema } from '@/pages/DetailsPage';
import { DetailsBlock, VideoFrame, VStack } from '@/shared/ui';
import { Gallery } from '@/widgets/Gallery';
import { Team } from '@/widgets/Team';
import { Box } from '@mui/material';

export const Details = (props: DetailsPageSchema) => {
    const { name, markdown, aim, client, contents, videoUrl, users, subtitle } = props;

    return (
        <VStack spacing={8}>
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
                    <VideoFrame url={videoUrl} name={name} />
                </DetailsBlock>
            )}

            <DetailsBlock title="Команда проекта" noBackground noPadding>
                <Team team={users} />
            </DetailsBlock>
        </VStack>
    );
};
