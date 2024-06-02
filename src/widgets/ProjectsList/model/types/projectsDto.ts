import { User } from '@/entities/user';

export interface ProjectDto {
    readonly id: number;
    readonly name: string;
    readonly description: string;
    readonly aim: string;
    readonly client: string;
    readonly tags: Array<{ name: string }>;
    readonly users: Array<User>;
}

export interface ProjectsResponse {
    readonly metadata: {
        readonly totalPages: number;
    };
    readonly items: Array<ProjectDto>;
}
