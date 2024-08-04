import { ValidationErrorDto } from '@/shared/lib/types/dto/appErrorDto';
import { EditProjectDto } from '../../api/types';
import { ProjectEditFormSchema } from '../../model/types/projectCreationForm';
import { projectCreationToDto } from './projectCreationMapper';
import { EntityValidationErrors } from '@/shared/lib/types/appError';
import { extractErrorMessage } from '@/shared/lib/helpers/extractErrorMessage';

export const projectEditToDto = (model: ProjectEditFormSchema): EditProjectDto => {
    return {
        id: model.id,
        ...projectCreationToDto(model),
    };
};
export function validationProjectEditErrorsFromDto(
    errorDto?: ValidationErrorDto<EditProjectDto>[] | null,
): EntityValidationErrors<EditProjectDto> {
    return {
        aim: extractErrorMessage('aim', errorDto),
        client: extractErrorMessage('client', errorDto),
        description: extractErrorMessage('description', errorDto),
        id: extractErrorMessage('id', errorDto),
        markdown: extractErrorMessage('markdown', errorDto),
        name: extractErrorMessage('name', errorDto),
        period: extractErrorMessage('period', errorDto),
        priority: extractErrorMessage('priority', errorDto),
        semester: extractErrorMessage('semester', errorDto),
        users: extractErrorMessage('users', errorDto),
        videoUrl: extractErrorMessage('videoUrl', errorDto),
    };
}
