import { type FetchQueryApiError } from '@/shared/api';
import { AppError } from '../appError';
import { ValidationErrorMapper } from './validationMapper';

export const UNKNOW_ERROR = 'Неизвестная ошибка';

export type ErrorMapper<TDto extends Record<string, any>, TEntity extends Record<string, any>> = ValidationErrorMapper<
    TDto,
    TEntity
>;

export class AppErrorMapper {
    public static fromDto<TErrorDto extends Record<string, any>>(httpError: FetchQueryApiError<TErrorDto>): AppError {
        const { data } = httpError;
        return new AppError(data.title ?? UNKNOW_ERROR);
    }
}
