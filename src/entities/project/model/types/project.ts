import { User } from '@/entities/user';
import { Image } from '@/shared/lib/types/image.ts';

export interface Project {
    readonly id: number;
    readonly name: string;
    readonly description: string;
    readonly aim: string;
    readonly client: string;
    readonly contents: Array<Image>;
    readonly tags: Array<string>;
    readonly users: Array<User>;
}
