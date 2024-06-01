export interface ProjectDto {
    readonly id: number;
    readonly name: string;
    readonly description: string;
    readonly tags: Array<{ name: string }>;
}

export interface ProjectsResponse {
    readonly metadata: {
        readonly totalPages: number;
    };
    readonly items: Array<ProjectDto>;
}
