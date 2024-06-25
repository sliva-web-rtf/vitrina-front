import { User } from '@/entities/user';

export interface ProjectDetails {
    readonly id: number;
    readonly name: string;
    readonly description?: string;
    readonly aim?: string;
    readonly client?: string;
    readonly contents: Array<string>;
    readonly tags: Array<string>;
    readonly users: Array<User>;
    readonly customTemplate?: string;
    readonly videoUrl?: string;
    readonly previewImagePath: string | null;
    readonly priority?: number;
    // TODO: переделать в читаемую модель.
    readonly semester?: number;
    readonly period?: string;
}
