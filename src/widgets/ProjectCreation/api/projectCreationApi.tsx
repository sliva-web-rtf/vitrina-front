import { baseApi, isApiError } from '@/shared/api';
import { ProjectCreationFormSchema, ProjectEditFormSchema } from '../model/types/projectCreationForm';
import { projectCreationToDto, validationProjectCreationErrorsFromDto } from '../lib/helpers/projectCreationMapper';
import { projectEditToDto, validationProjectEditErrorsFromDto } from '../lib/helpers/projectEditMapper';
import { AppErrorMapper } from '@/shared/lib/types/mappers/appErrorMapper';

const projectCreationApi = baseApi.injectEndpoints({
    endpoints: build => ({
        createProject: build.mutation<string, ProjectCreationFormSchema>({
            query: project => ({
                method: 'POST',
                url: 'project/create',
                body: {
                    ...projectCreationToDto(project),
                },
            }),
            transformErrorResponse: (error: unknown) => {
                if (isApiError(error)) {
                    const appError = AppErrorMapper.fromDtoWithValidationSupport(
                        error,
                        validationProjectCreationErrorsFromDto,
                    );
                    return appError;
                }
                return error;
            },
        }),
        updateProject: build.mutation<void, ProjectEditFormSchema>({
            query: project => ({
                method: 'PUT',
                url: `project/${project.id}`,
                body: {
                    ...projectEditToDto(project),
                },
            }),
            transformErrorResponse: (error: unknown) => {
                if (isApiError(error)) {
                    const appError = AppErrorMapper.fromDtoWithValidationSupport(
                        error,
                        validationProjectEditErrorsFromDto,
                    );
                    return appError;
                }
                return error;
            },
        }),
    }),
});

export const { useCreateProjectMutation, useUpdateProjectMutation } = projectCreationApi;
