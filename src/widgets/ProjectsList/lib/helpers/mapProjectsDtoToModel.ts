import { ProjectsModel } from '../../model/types/projectsModel';
import { ProjectsResponse } from '../../model/types/projectsDto';

export const mapProjectsDtoToModel = (dto: ProjectsResponse): ProjectsModel => ({
    items: dto.items.map(value => ({
        ...value,
        tags: value.tags.map(tag => tag.name),
    })),
    metadata: {
        totalPages: dto.metadata.totalPages,
    },
});
