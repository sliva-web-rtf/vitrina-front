import { ProjectsModel } from '../../model/types/projectsModel';
import { ProjectsResponse } from '../../model/types/projectsDto';
import { capitalizeFirstLetter } from '@/shared/lib/helpers/capitalize';

export const mapProjectsDtoToModel = (dto: ProjectsResponse): ProjectsModel => ({
    items: dto.items.map(value => ({
        ...value,
        tags: value.tags.map(tag => capitalizeFirstLetter(tag.name)),
    })),
    metadata: {
        totalPages: dto.metadata.totalPages,
    },
});
