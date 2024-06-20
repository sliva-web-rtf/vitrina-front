import { CreateProjectDto } from '../../api/types';
import { ProjectCreationFormSchema } from '../../model/types/projectCreationForm';

export const projectCreationToDto = (model: ProjectCreationFormSchema): CreateProjectDto => {
    return {
        name: model.name,
        description: model.description ?? '',
        aim: model.aim,
        client: model.client,
        semester: model.semester,
        period: model.period,
        markdown: model.customTemplate,
        videoUrl: model.videoUrl,
        users:
            model.users?.map((user) => ({
                email: user.email,
                firstName: user.firstName,
                lastName: user.lastName,
                patronymic: user.patronymic,
                roles: user.roles
                    ? user.roles.map((role) => ({
                          name: role,
                      }))
                    : [],
            })) ?? [],
    };
};
