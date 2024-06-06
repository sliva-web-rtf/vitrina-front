import { Project } from '@/entities/project';

export interface ProjectsModel {
    readonly items: Array<Project>;
    readonly metadata: {
        readonly totalPages: number;
    };
}
