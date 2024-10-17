import { API, fetcher } from '@/shared/api';
import { transformImageDtoToString } from '@/shared/lib/helpers/transfromImageDtoToString';
import { DetailsPageSchema } from '../model/types';

export const DetailsPageService = {
    async getProjectById(id: number | string) {
        const response = await fetcher<DetailsPageSchema>(API + `/project/${id}`);
        const { contents } = response;

        return {
            ...response,
            // @ts-expect-error Хак из-за бредового типа картинка (пусть бекенд меняет)
            contents: contents.map(transformImageDtoToString),
        };
    },
};
