import { DetailsDto } from '../../model/types/DetailsDto';
import { Project } from '@/entities/project';

export const mapDetailsDtoToModel = (dto: DetailsDto): Project => ({
    ...dto,
    tags: dto.tags.map(item => item.name),
    users: dto.users.map(item => ({
        ...item,
        roles: item.roles.map(role => role.name),
    })),
});
