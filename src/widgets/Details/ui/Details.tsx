import { DetailsPageSchema } from '@/pages/DetailsPage';
import { DetailsBlock, HStack, VideoFrame, VStack } from '@/shared/ui';
import { Gallery } from '@/widgets/Gallery';
import { Team } from '@/widgets/Team';
import { Box } from '@mui/material';
import { defaultText } from '../model/const';
import classNames from './Details.module.scss';

export const Details = (props: DetailsPageSchema) => {
    const { name, markdown, aim, client, contents, videoUrl, users, subtitle, problem, idea, solution } = props;

    return (
        <VStack spacing={8}>
            {markdown && (
                <DetailsBlock title="Другая информация">
                    <Box className="customTemplate" dangerouslySetInnerHTML={{ __html: markdown }} />
                </DetailsBlock>
            )}
            <HStack gap={3} justifyContent="space-between" className={classNames.hstack}>
                <DetailsBlock anchor="problem" title="Проблема" text={problem || defaultText.problem} />
                <DetailsBlock title="Цель проекта" text={aim || defaultText.aim} />
            </HStack>
            <HStack gap={3} justifyContent="space-between" className={classNames.hstack}>
                <DetailsBlock anchor="solution" title="Решение" text={solution || defaultText.solution} />
                <DetailsBlock anchor="idea" title="Идея" text={idea || defaultText.idea} />
            </HStack>

            <DetailsBlock title="Заказчик" text={client || defaultText.client} />

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

            <DetailsBlock anchor="team" title="Команда проекта" noBackground noPadding>
                <Team team={users} />
            </DetailsBlock>
        </VStack>
    );
};
