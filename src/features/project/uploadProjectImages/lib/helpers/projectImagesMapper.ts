import { extractErrorMessage } from '@/shared/lib/helpers/extractErrorMessage';
import { EntityValidationErrors } from '@/shared/lib/types/appError';
import { ValidationErrorDto } from '@/shared/lib/types/dto/appErrorDto';
import { UploadProjectImagesSchema } from '../../model/types/UploadProjectImagesSchema';

export function validationProjectImagesErrorsFromDto(
    errorDto?: ValidationErrorDto<UploadProjectImagesSchema>[] | null,
): EntityValidationErrors<UploadProjectImagesSchema> {
    return {
        file: extractErrorMessage('file', errorDto),
        id: extractErrorMessage('id', errorDto),
    };
}
