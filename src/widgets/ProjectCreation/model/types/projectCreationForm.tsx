import { ProjectDetails } from '@/entities/project';
import { z } from 'zod';

export const projectCreationFormSchema = z.object({
    name: z.string(),
    description: z.string(),
    client: z.string(),
    aim: z.string(),
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
        z.object({
            id: z.number().optional(),
            email: z.string(),
            firstName: z.string(),
            lastName: z.string(),
            patronymic: z.string().optional(),
            roles: z.array(z.string()),
        }),
    ),
    projectType: z.string().optional(),
    sphere: z.string().optional(),
    period: z.string().optional(),
    videoUrl: z.string().optional(),
    priority: z.number().optional(),
});

export type ProjectCreationFormSchema = z.infer<typeof projectCreationFormSchema>;

// TODO: вынести в отдельный файл
export type ProjectEditFormSchema = ProjectCreationFormSchema & {
    id: ProjectDetails['id'];
};
