import { ProjectDetails } from '@/entities/project';
import { Semester } from '@/entities/semester';
import { z } from 'zod';

export const projectCreationFormSchema = z.object({
    name: z.string(),
    description: z.string().optional(),
    client: z.string().optional(),
    semester: z.nativeEnum(Semester).optional(),
    period: z.string().optional(),
    customTemplate: z.string().optional(),
    videoUrl: z.string().optional(),
    priority: z.number().optional(),
    users: z.array(
        // TODO: пересмотреть логику с юзерами
        z.object({
            id: z.number().optional(),
            email: z.string(),
            // TODO: вернуть 3 поля, вместо одного (firstname, lastname, middlename)
            fullname: z.string(),
            roles: z.array(z.string()),
        }),
    ),
});

export type ProjectCreationFormSchema = z.infer<typeof projectCreationFormSchema>;

// TODO: вынести в отдельный файл
export type ProjectEditFormSchema = ProjectCreationFormSchema & {
    id: ProjectDetails['id'];
};
