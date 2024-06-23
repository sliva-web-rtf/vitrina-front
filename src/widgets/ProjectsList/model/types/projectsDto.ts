export interface ProjectDto {
    readonly id: number;
    readonly name: string;
    readonly description: string;
    readonly imageUrl: string;
    readonly tags: Array<{ name: string }>;
    readonly previewImagePath: string | null;
}

export interface ProjectsResponse {
    readonly metadata: {
        readonly totalPages: number;
    };
    readonly items: Array<ProjectDto>;
}
