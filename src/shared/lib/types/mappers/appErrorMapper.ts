 

import { type FetchQueryApiError } from '@/shared/api';
import { AppError } from '../appError';

export const UNKNOW_ERROR = 'Неизвестная ошибка';

export class AppErrorMapper {
    public static fromDto(httpError: FetchQueryApiError<Record<string, unknown>>): AppError {
        const { data } = httpError;
        return new AppError(data.title ?? UNKNOW_ERROR);
    }
}