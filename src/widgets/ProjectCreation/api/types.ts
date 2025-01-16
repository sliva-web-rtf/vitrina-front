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
    problem: string;
    idea: string;
    solution: string;
    customBlocks: { title: string; text: string }[];
    description?: string;
    priority?: number;
    client?: string;
    semester?: Semester;
    period?: string;
    videoUrl?: string;
    users?: UserCreationDto[];
    sphere?: string;
    projectType?: string;
}

export interface EditProjectDto extends CreateProjectDto {
    id: number;
}
