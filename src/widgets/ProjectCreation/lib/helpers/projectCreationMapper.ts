import { ValidationErrorDto } from '@/shared/lib/types/dto/appErrorDto';
import { CreateProjectDto } from '../../api/types';
import { ProjectCreationFormSchema } from '../../model/types/projectCreationForm';
import { EntityValidationErrors } from '@/shared/lib/types/appError';
import { extractErrorMessage } from '@/shared/lib/helpers/extractErrorMessage';

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
                id: user.id,
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

export function validationProjectCreationErrorsFromDto(
    errorDto?: ValidationErrorDto<CreateProjectDto>[] | null,
): EntityValidationErrors<CreateProjectDto> {
    return {
        aim: extractErrorMessage('aim', errorDto),
        client: extractErrorMessage('client', errorDto),
        description: extractErrorMessage('description', errorDto),
        markdown: extractErrorMessage('markdown', errorDto),
        name: extractErrorMessage('name', errorDto),
        period: extractErrorMessage('period', errorDto),
        priority: extractErrorMessage('priority', errorDto),
        semester: extractErrorMessage('semester', errorDto),
        users: extractErrorMessage('users', errorDto),
        videoUrl: extractErrorMessage('videoUrl', errorDto),
    };
}
