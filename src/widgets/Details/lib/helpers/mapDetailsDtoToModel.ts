import { DetailsDto } from '../../model/types/DetailsDto';
import { ProjectDetails } from '@/entities/project';
import { capitalizeFirstLetter } from '@/shared/lib/helpers/capitalize';

export const mapDetailsDtoToModel = (dto: DetailsDto): ProjectDetails => ({
    ...dto,
    tags: dto.tags.map(item => capitalizeFirstLetter(item.name)),
    users: dto.users.map(item => ({
        ...item,
        roles: item.roles.map(role => capitalizeFirstLetter(role.name)),
    })),
});
