import { User } from '@/entities/user';

export type DetailsPageSchema = {
    name: string;
    description: string;
    aim: string;
    client: string;
    contents: string[];
    users: User[];
    previewImagePath: string | null;

    problem?: string;
    idea?: string;
    solution?: string;
    subtitle?: string;
    markdown?: string;
    videoUrl?: string;
    period?: string;
    semester?: number;
    priority?: number;
};
