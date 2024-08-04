import { extractErrorMessage } from '@/shared/lib/helpers/extractErrorMessage';
import { EntityValidationErrors } from '@/shared/lib/types/appError';
import { ValidationErrorDto } from '@/shared/lib/types/dto/appErrorDto';

export function validationProjectImagesErrorsFromDto(
    errorDto?: ValidationErrorDto<{ file: FormData; id: number }>[] | null,
): EntityValidationErrors<{ file: FormData; id: number }> {
    return {
        file: extractErrorMessage('file', errorDto),
        id: extractErrorMessage('id', errorDto),
    };
}
