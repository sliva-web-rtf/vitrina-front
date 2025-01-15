import { Semester } from '@/entities/semester';
import { User } from '@/entities/user';

type CustomBlock = {
    title: string;
    text: string;
};

export interface ProjectDetails {
    readonly id: number;
    readonly name: string;
    readonly description?: string;
    readonly idea?: string;
    readonly solution?: string;
    readonly problem?: string;
    readonly contents: Array<string>;
    readonly tags: Array<string>;
    readonly users: Array<User>;

    readonly aim?: string;
    readonly client?: string;
    readonly customBlocks?: CustomBlock[];
    readonly videoUrl?: string;
    readonly previewImagePath: string | null;
    readonly priority?: number;
    readonly semester?: Semester;
    readonly period?: string;
    /* *depracated */
    readonly customTemplate?: string;
}
