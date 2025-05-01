import { ProjectDetails } from '@/entities/project';
import { z } from 'zod';

export const projectCreationFormSchema = z.object({
    name: z.string(),
    description: z.string(),
    client: z.string().optional(),
    aim: z.string().optional(),
    problem: z.string().optional(),
    idea: z.string().optional(),
    solution: z.string().optional(),
    customBlocks: z
        .array(
            z.object({
                id: z.number().optional(),
                title: z.string(),
                text: z.string(),
            }),
        )
        .optional(),
    users: z
        .array(
            z.object({
                id: z.number().optional(),
                email: z.string(),
                firstName: z.string(),
                lastName: z.string(),
                patronymic: z.string().optional(),
                roles: z.array(z.string()),
            }),
        )
        .optional(),
    type: z.string().optional(),
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
