import { Project } from '@/entities/project';

export interface ProjectsModel {
    readonly items: Array<Pick<Project, 'id' | 'name' | 'description' | 'tags'>>;
    readonly metadata: {
        readonly totalPages: number;
    };
}
