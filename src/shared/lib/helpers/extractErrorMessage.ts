/* eslint-disable @typescript-eslint/no-explicit-any */

import { ValidationErrorDto } from '../types/dto/appErrorDto';

export function extractErrorMessage<T extends Record<string, any>>(
    field: keyof T,
    errorArray?: ValidationErrorDto<T>[] | null,
): string | undefined {
    if (errorArray == null || errorArray.length === 0) {
        return undefined;
    }

    return errorArray
        .filter(error => error.field === field)
        .map(error => error.detail)
        .at(0);
}
