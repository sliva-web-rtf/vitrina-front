import { z } from 'zod';

export const projectCreationFormSchema = z.object({
    name: z.string(),
    description: z.string().optional(),
    aim: z.string().optional(),
    client: z.string().optional(),
    semester: z.number().optional(),
    period: z.string().optional(),
    customTemplate: z.string().optional(),
    videoUrl: z.string().optional(),
    users:  z
    .array(
        z.object({
            email: z.string(),
            firstName: z.string(),
            lastName: z.string(),
            patronymic: z.string(),
            role: z.string(),
        }),
    ).optional(),
});

export type ProjectCreationFormSchema = z.infer<typeof projectCreationFormSchema>;