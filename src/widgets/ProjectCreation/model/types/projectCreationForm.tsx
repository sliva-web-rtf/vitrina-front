import { ProjectDetails } from '@/entities/project';
import { z } from 'zod';

export const projectCreationFormSchema = z.object({
    name: z.string(),
    description: z.string().optional(),
    client: z.string().optional(),
    semester: z.number().optional(),
    period: z.string().optional(),
    customTemplate: z.string().optional(),
    videoUrl: z.string().optional(),
    priority: z.number().optional(),
    users:  z
    .array(
        z.object({
            email: z.string(),
            firstName: z.string(),
            lastName: z.string(),
            patronymic: z.string(),
            roles: z.array(z.string()),
        }),
    ),
});

export type ProjectCreationFormSchema = z.infer<typeof projectCreationFormSchema>;

// TODO: вынести в отдельный файл
export type ProjectEditFormSchema = ProjectCreationFormSchema & {
    id: ProjectDetails['id'],
}