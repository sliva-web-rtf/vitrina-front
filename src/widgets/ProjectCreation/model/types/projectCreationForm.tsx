import { ProjectDetails } from '@/entities/project';
import { Semester } from '@/entities/semester';
import { z } from 'zod';

export const projectCreationFormSchema = z.object({
    name: z.string({ required_error: 'Название проекта обязательно' }),
    description: z.string().optional(),
    client: z.string().optional(),
    semester: z.nativeEnum(Semester).optional(),
    period: z.string().optional(),
    videoUrl: z.string().optional(),
    priority: z.number().optional(),
    problem: z.string(),
    idea: z.string(),
    solution: z.string(),
    customBlocks: z.array(
        z.object({
            id: z.number().optional(),
            title: z.string(),
            text: z.string(),
        }),
    ),
    users: z.array(
        // TODO: пересмотреть логику с юзерами
        z.object({
            id: z.number().optional(),
            email: z.string(),
            firstName: z.string(),
            lastName: z.string(),
            patronymic: z.string().optional(),
            roles: z.array(z.string()),
        }),
    ),
});

export type ProjectCreationFormSchema = z.infer<typeof projectCreationFormSchema>;

// TODO: вынести в отдельный файл
export type ProjectEditFormSchema = ProjectCreationFormSchema & {
    id: ProjectDetails['id'];
};
