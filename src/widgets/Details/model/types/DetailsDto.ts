import { Semester } from '@/entities/semester';

export interface DetailsDto {
    readonly id: number;
    readonly name: string;
    readonly description: string;
    readonly aim: string;
    readonly client: string;
    readonly markdown?: string;
    readonly videoUrl?: string;
    readonly semester?: Semester;
    readonly contents: Array<{ imageUrl: string }>;
    readonly tags: Array<{ name: string }>;
    readonly previewImagePath: string | null;
    readonly priority?: number;
    readonly period?: string;
    readonly users: Array<{
        readonly id: string;
        readonly email: string;
        readonly firstName: string;
        readonly lastName: string;
        readonly patronymic: string;
        readonly roles: Array<{ name: string }>;
        readonly avatar: string;
    }>;
}
