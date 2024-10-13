import { ProjectDetails } from '@/entities/project';
import { capitalized } from '@/shared/lib/helpers/capitalized';
import { DetailsDto } from '../../model/types/DetailsDto';

export const mapDetailsDtoToModel = (dto: DetailsDto): ProjectDetails => ({
    ...dto,
    tags: dto.tags.map((item) => capitalized(item.name)),
    videoUrl: dto.videoUrl,
    customTemplate: dto.markdown,
    contents: dto.contents.map((item) => `${process.env.NEXT_PUBLIC_IMAGES_PATH}${item.imageUrl}`),
    users: dto.users.map((item) => ({
        ...item,
        roles: item.roles.map((role) => capitalized(role.name)),
    })),
    previewImagePath:
        dto.previewImagePath && dto.previewImagePath !== ''
            ? `${process.env.NEXT_PUBLIC_PREVIEW_IMAGE}${dto.previewImagePath}`
            : null,
});
