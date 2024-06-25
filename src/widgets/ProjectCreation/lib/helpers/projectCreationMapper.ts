import { CreateProjectDto } from '../../api/types';
import { ProjectCreationFormSchema } from '../../model/types/projectCreationForm';

export const projectCreationToDto = (model: ProjectCreationFormSchema): CreateProjectDto => {
    return {
        name: model.name,
        description: model.description ?? '',
        client: model.client,
        semester: model.semester,
        period: model.period,
        markdown: model.customTemplate,
        videoUrl: model.videoUrl,
        priority: model.priority,
        users:
            model.users?.map(user => ({
                email: user.email,
                firstName: user.fullname.split(' ').at(1) ?? '',
                lastName: user.fullname.split(' ').at(0) ?? '',
                patronymic: user.fullname.split(' ').at(2) ?? '',
                roles: user.roles
                    ? user.roles.map(role => ({
                          name: role,
                      }))
                    : [],
            })) ?? [],
    };
};
