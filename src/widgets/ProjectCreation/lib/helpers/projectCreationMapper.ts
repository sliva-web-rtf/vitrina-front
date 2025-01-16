import { extractErrorMessage } from '@/shared/lib/helpers/extractErrorMessage';
import { EntityValidationErrors } from '@/shared/lib/types/appError';
import { ValidationErrorDto } from '@/shared/lib/types/dto/appErrorDto';
import { CreateProjectDto } from '../../api/types';
import { ProjectCreationFormSchema } from '../../model/types/projectCreationForm';

export const projectCreationToDto = (model: ProjectCreationFormSchema): CreateProjectDto => {
    return {
        name: model.name,
        aim: model.aim,
        description: model.description ?? '',
        client: model.client,
        sphere: model.sphere,
        type: model.type,
        period: model.period,
        customBlocks: model.customBlocks,
        videoUrl: model.videoUrl,
        priority: model.priority,
        problem: model.problem,
        idea: model.idea,
        solution: model.solution,
        users:
            model.users?.map(user => ({
                id: user.id,
                email: user.email,
                firstName: user.firstName,
                lastName: user.lastName,
                patronymic: user.patronymic,
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
        // @ts-expect-error Лень разбиравться появилось после смены типа customBlocks на массив
        customBlocks: extractErrorMessage('customBlocks', errorDto),
        name: extractErrorMessage('name', errorDto),
        period: extractErrorMessage('period', errorDto),
        priority: extractErrorMessage('priority', errorDto),
        semester: extractErrorMessage('semester', errorDto),
        users: extractErrorMessage('users', errorDto),
        videoUrl: extractErrorMessage('videoUrl', errorDto),
    };
}
