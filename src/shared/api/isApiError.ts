/* eslint-disable @typescript-eslint/no-explicit-any */
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { ApiErrorDto } from '../lib/types/dto/appErrorDto';

function isFetchBaseQueryError(error: unknown): error is FetchBaseQueryError {
    return typeof error === 'object' && error != null && 'status' in error;
}

export type FetchQueryApiError<T extends Record<string, any>> = FetchBaseQueryError & {
    data: ApiErrorDto<T>;
};

export function isApiError<TDto extends Record<string, any>>(error: unknown): error is FetchQueryApiError<TDto> {
    return isFetchBaseQueryError(error) && typeof error.data === 'object';
}
