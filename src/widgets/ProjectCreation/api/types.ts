import { Semester } from '@/entities/semester';

interface UserCreationDto {
    id?: number;
    email: string;
    firstName: string;
    lastName: string;
    patronymic?: string;
    roles: { name: string }[];
}

export interface CreateProjectDto {
    name: string;
    aim?: string;
    customBlocks: { title: string; text: string }[];
    description?: string;
    priority?: number;
    client?: string;
    semester?: Semester;
    period?: string;
    videoUrl?: string;
    users?: UserCreationDto[];
    problem: string;
    idea: string;
    solution: string;
}

export interface EditProjectDto extends CreateProjectDto {
    id: number;
}
