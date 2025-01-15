import { DetailsPageSchema } from '@/shared/services';
import { DetailsBlock, HStack, VideoFrame, VStack } from '@/shared/ui';
import { Gallery } from '@/widgets/Gallery';
import { Team } from '@/widgets/Team';
import { Box } from '@mui/material';
import { defaultText } from '../model/const';
import classNames from './Details.module.scss';

export const Details = (props: DetailsPageSchema) => {
    const { name, customBlocks, aim, client, contents, videoUrl, users, problem, idea, solution } = props;

    return (
        <VStack spacing={8}>
            {customBlocks?.map(({ title, text }, index) => (
                <DetailsBlock key={`customBlock-${index}`} title={title}>
                    <Box className="customTemplate" dangerouslySetInnerHTML={{ __html: text }} />
                </DetailsBlock>
            ))}
            <HStack gap={3} justifyContent="space-between" className={classNames.hstack}>
                <DetailsBlock anchor="problem" title="Проблема" text={problem || defaultText.problem} />
                <DetailsBlock title="Цель проекта" text={aim || defaultText.aim} />
            </HStack>
            <HStack gap={3} justifyContent="space-between" className={classNames.hstack}>
                <DetailsBlock anchor="solution" title="Решение" text={solution || defaultText.solution} />
                <DetailsBlock anchor="idea" title="Идея" text={idea || defaultText.idea} />
            </HStack>

            <DetailsBlock title="Заказчик" text={client || defaultText.client} />

            {Boolean(contents?.length) && (
                <DetailsBlock title="Галерея" noBackground noPadding>
                    <Gallery images={contents} />
                </DetailsBlock>
            )}

            {Boolean(videoUrl) && (
                <DetailsBlock title="Видео" noBackground noPadding>
                    <VideoFrame url={videoUrl as string} name={name} />
                </DetailsBlock>
            )}

            <DetailsBlock anchor="team" title="Команда проекта" noBackground noPadding>
                <Team team={users} />
            </DetailsBlock>
        </VStack>
    );
};
