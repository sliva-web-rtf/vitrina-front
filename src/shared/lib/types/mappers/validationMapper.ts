/* eslint-disable @typescript-eslint/no-explicit-any */
import { EntityValidationErrors } from '../appError';
import { ValidationErrorDto } from '../dto/appErrorDto';

export type ValidationErrorMapper<TDto extends Record<string, any>, TModel extends Record<string, any>> = (
    errorDto?: ValidationErrorDto<TDto>[] | null,
) => EntityValidationErrors<TModel>;
