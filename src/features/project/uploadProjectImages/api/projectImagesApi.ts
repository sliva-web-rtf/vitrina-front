import { baseApi, isApiError } from '@/shared/api';
import { AppErrorMapper } from '@/shared/lib/types/mappers/appErrorMapper';
import { validationProjectImagesErrorsFromDto } from '../lib/helpers/projectImagesMapper';

const projectImagesApi = baseApi.injectEndpoints({
    endpoints: build => ({
        uploadImages: build.mutation<void, { formData: FormData; id: number }>({
            query: ({ formData, id }) => ({
                method: 'POST',
                url: `/project/${id}/upload-images`,
                body: formData,
            }),
            transformErrorResponse: (error: unknown) => {
                if (isApiError(error)) {
                    const appError = AppErrorMapper.fromDtoWithValidationSupport(
                        error,
                        validationProjectImagesErrorsFromDto,
                    );
                    return appError;
                }
                return error;
            },
        }),
        uploadPreviewImage: build.mutation<void, { formData: FormData; id: number }>({
            query: ({ formData, id }) => ({
                method: 'POST',
                url: `/project/${id}/upload-preview-images`,
                body: formData,
            }),
            transformErrorResponse: (error: unknown) => {
                if (isApiError(error)) {
                    const appError = AppErrorMapper.fromDtoWithValidationSupport(
                        error,
                        validationProjectImagesErrorsFromDto,
                    );
                    return appError;
                }
                return error;
            },
        }),
    }),
});

export const { useUploadImagesMutation, useUploadPreviewImageMutation } = projectImagesApi;
