import { capitalized } from '@/shared/lib/helpers/capitalized';
import { ProjectsResponse } from '../../model/types/projectsDto';
import { ProjectsModel } from '../../model/types/projectsModel';

export const mapProjectsDtoToModel = (dto: ProjectsResponse): ProjectsModel => ({
    items: dto.items.map(value => ({
        ...value,
        imageUrl: Boolean(value.imageUrl) ? `${process.env.NEXT_PUBLIC_IMAGES_PATH}${value.imageUrl}` : undefined,
        previewImagePath: Boolean(value.previewImagePath)
            ? `${process.env.NEXT_PUBLIC_PREVIEW_IMAGE}${value.previewImagePath}`
            : null,
        tags: value.tags.map(tag => capitalized(tag.name)),
    })),
    metadata: {
        totalPages: dto.metadata.totalPages,
    },
});
