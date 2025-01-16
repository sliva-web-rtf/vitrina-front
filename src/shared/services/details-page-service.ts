import { User } from '@/entities/user';
import { transformImageDtoToString } from '@/shared/lib/helpers/transfromImageDtoToString';
import { fetcher } from '../api';

export type CustomBlock = {
    title: string;
    text: string;
};

export type DetailsPageSchema = {
    name: string;
    description: string;
    aim: string;
    client: string;
    contents: (string | null)[];
    users: User[];
    previewImagePath: string | null;
    problem: string;
    idea: string;
    solution: string;

    type?: string;
    sphere?: string;
    customBlocks: CustomBlock[];
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
            // @ts-expect-error поменять тип картинок нада
            contents: contents.map(transformImageDtoToString),
        };
    },
};
