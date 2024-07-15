import { ProjectsModel } from '../../model/types/projectsModel';
import { ProjectsResponse } from '../../model/types/projectsDto';
import { capitalizeFirstLetter } from '@/shared/lib/helpers/capitalize';

export const mapProjectsDtoToModel = (dto: ProjectsResponse): ProjectsModel => ({
    items: dto.items.map((value) => ({
        ...value,
        imageUrl:
            value.imageUrl && value.imageUrl !== ''
                ? `${process.env.NEXT_PUBLIC_IMAGES_PATH}${value.imageUrl}`
                : undefined,
        previewImagePath:
            value.previewImagePath && value.previewImagePath !== ''
                ? `${process.env.NEXT_PUBLIC_PREVIEW_IMAGE}${value.previewImagePath}`
                : null,
        tags: value.tags.map((tag) => capitalizeFirstLetter(tag.name)),
    })),
    metadata: {
        totalPages: dto.metadata.totalPages,
    },
});
