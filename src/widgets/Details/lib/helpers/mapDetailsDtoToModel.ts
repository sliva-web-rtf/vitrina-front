import { DetailsDto } from '../../model/types/DetailsDto';
import { ProjectDetails } from '@/entities/project';
import { capitalizeFirstLetter } from '@/shared/lib/helpers/capitalize';

export const mapDetailsDtoToModel = (dto: DetailsDto): ProjectDetails => ({
    ...dto,
    tags: dto.tags.map((item) => capitalizeFirstLetter(item.name)),
    videoUrl: dto.videoUrl,
    customTemplate: dto.markdown,
    contents: dto.contents.map((item) => `${process.env.NEXT_PUBLIC_IMAGES_PATH}${item.imageUrl}`),
    users: dto.users.map((item) => ({
        ...item,
        roles: item.roles.map((role) => capitalizeFirstLetter(role.name)),
    })),
    previewImagePath:
        dto.previewImagePath && dto.previewImagePath !== ''
            ? `${process.env.NEXT_PUBLIC_PREVIEW_IMAGE}${dto.previewImagePath}`
            : null,
});
