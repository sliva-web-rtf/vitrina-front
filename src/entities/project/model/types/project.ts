export interface Project {
    readonly id: number;
    readonly name: string;
    readonly description: string;
    readonly previewImagePath: string | null;
    readonly tags: Array<string>;
    readonly imageUrl?: string;
}
