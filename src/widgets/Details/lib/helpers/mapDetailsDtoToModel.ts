import { DetailsDto } from '../../model/types/DetailsDto';
import { ProjectDetails } from '@/entities/project';
import { capitalizeFirstLetter } from '@/shared/lib/helpers/capitalize';

export const mapDetailsDtoToModel = (dto: DetailsDto): ProjectDetails => ({
    ...dto,
    tags: dto.tags.map(item => capitalizeFirstLetter(item.name)),
    videoUrl: dto.videoUrl,
    customTemplate: dto.markdown,
    contents: dto.contents.map(item => `${import.meta.env.VITE_IMAGES_PATH}${item.imageUrl}`),
    users: dto.users.map(item => ({
        ...item,
        roles: item.roles.map(role => capitalizeFirstLetter(role.name)),
    })),
    previewImagePath:
        dto.previewImagePath && dto.previewImagePath !== ''
            ? `${import.meta.env.VITE_PREVIEW_IMAGE}${dto.previewImagePath}`
            : null,
});
