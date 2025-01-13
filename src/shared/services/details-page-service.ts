import { User } from '@/entities/user';
import { fetcher } from '@/shared/api';
import { transformImageDtoToString } from '@/shared/lib/helpers/transfromImageDtoToString';

export type DetailsPageSchema = {
    name: string;
    description: string;
    aim: string;
    client: string;
    contents: string[];
    users: User[];
    previewImagePath: string | null;
    problem: string;
    idea: string;
    solution: string;

    subtitle?: string;
    markdown?: string;
    videoUrl?: string;
    period?: string;
    semester?: number;
    priority?: number;
};

export const DetailsPageService = {
    async getProjectById(id: number | string) {
        const response = await fetcher<DetailsPageSchema>(`/project/${id}`);
        const { contents } = response;

        return {
            ...response,
            // @ts-expect-error Бредовый тип картинки на беке
            contents: contents.map(transformImageDtoToString),
        };
    },
};
