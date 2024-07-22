import { Semester } from '@/entities/semester';

interface UserCreationDto {
    id?: number;
    email: string;
    firstName: string;
    lastName: string;
    patronymic: string;
    roles: { name: string }[];
}

export interface CreateProjectDto {
    name: string;
    description?: string;
    aim?: string;
    priority?: number;
    client?: string;
    semester?: Semester;
    period?: string;
    markdown?: string;
    videoUrl?: string;
    users?: UserCreationDto[];
}

export interface EditProjectDto extends CreateProjectDto {
    id: number;
}
