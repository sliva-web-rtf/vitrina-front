import { ProjectDetails } from '@/entities/project';
import { getUsersWithoutId } from '@/shared/lib/helpers/getUsersWithoutId.ts';
import { AppError, EntityValidationErrors } from '@/shared/lib/types/appError';
import { BaseButton, BaseField } from '@/shared/ui';
import { TextEditor } from '@/widgets/TextEditor';
import { zodResolver } from '@hookform/resolvers/zod';
import { Autocomplete, Chip, Stack, Typography } from '@mui/material';
import { KeyboardEvent, memo } from 'react';
import { Controller, useFieldArray, useForm } from 'react-hook-form';
import { useCreateProjectMutation, useUpdateProjectMutation } from '../api/projectCreationApi';
import { CreateProjectDto, EditProjectDto } from '../api/types';
import { rolesOptions } from '../model/const/rolesOptions';
import { ProjectCreationFormSchema, projectCreationFormSchema } from '../model/types/projectCreationForm';

interface ProjectCreationFormProps {
    onSuccess?: (id: ProjectDetails['id'], project: ProjectCreationFormSchema) => void;
    project?: ProjectDetails;
}

{
    /*eslint-disable max-len*/
}
// TODO: отрефакторить логику, добавить нормальное тексты ошибок, catch и обработку ошибок с сервера. Подумать над
//  naming'ом

export const ProjectCreationForm = memo((props: ProjectCreationFormProps) => {
    const { onSuccess, project } = props;
    const [createProject, { isLoading: isCreationProjectLoading, error: projectCreationErrors }] =
        useCreateProjectMutation();
    const [editProject, { isLoading: isEditProjectLoading, error: projectEditErrors }] = useUpdateProjectMutation();

    const {
        register,
        formState: { errors },
        control,
        handleSubmit,
        setError,
    } = useForm<ProjectCreationFormSchema>({
        mode: 'onBlur',
        resolver: zodResolver(projectCreationFormSchema),
        defaultValues: {
            priority: project?.priority ?? 0,
            name: project?.name,
            client: project?.client,
            description: project?.description,
            users: project?.users,
            videoUrl: project?.videoUrl,
            semester: project?.semester,
            period: project?.period,
            aim: project?.aim,
            idea: project?.idea,
            solution: project?.solution,
            problem: project?.problem,
            customBlocks: project?.customBlocks,
        },
    });

    const {
        fields: customBlocksFields,
        append: appendCustomBlock,
        remove: removeCustomBlock,
    } = useFieldArray({
        name: 'customBlocks',
        control,
    });

    const {
        fields: userFields,
        append: appendUser,
        remove: removeUser,
    } = useFieldArray({
        name: 'users',
        control,
    });

    // TODO: Возможно стоит вынести логику валидационных ошибок выше или отдельно, а также можно убрать фокус если он мешает
    const onValidationError = (
        validationData: EntityValidationErrors<EditProjectDto | CreateProjectDto> | undefined,
    ) => {
        for (const [key, value] of Object.entries(validationData || {})) {
            if (value) {
                // @ts-expect-error Лень разбиравться появилось после смены типа customBlocks на массив
                setError(key as unknown, { message: value }, { shouldFocus: true });
            }
        }
    };

    const onCreationSubmit = async (data: ProjectCreationFormSchema) => {
        const newData = {
            ...data,
            customBlocks: data.customBlocks?.map(block => ({ ...block, id: undefined })) ?? [],
            users: getUsersWithoutId(data.users),
        };
        const response = await createProject(newData);
        if ('error' in response && response.error instanceof AppError) {
            onValidationError(response.error.validationData);
        } else if ('data' in response) {
            onSuccess?.(Number(response.data), data);
        }
    };

    const onUpdateSubmit = async (data: ProjectCreationFormSchema) => {
        if (project?.id) {
            const response = await editProject({ ...data, id: project.id });
            if ('error' in response && response.error instanceof AppError) {
                onValidationError(response.error.validationData);
            } else if ('data' in response) {
                onSuccess?.(project.id, data);
            }
        }
    };

    return (
        <Stack spacing={2}>
            <Stack component="form" spacing={2}>
                <BaseField
                    autoFocus
                    required
                    label="Название"
                    fullWidth
                    autoComplete="off"
                    {...register('name')}
                    error={Boolean(errors.name)}
                    helperText={errors.name?.message}
                />
                <BaseField
                    multiline
                    label="Описание"
                    required
                    fullWidth
                    autoComplete="off"
                    {...register('description')}
                    error={Boolean(errors.description)}
                    helperText={errors.description?.message}
                />
                <Stack spacing={2}>
                    <Typography>Кастомные блоки:</Typography>
                    {customBlocksFields.map((field, index) => (
                        <Stack
                            sx={theme => ({
                                borderWidth: '1px',
                                borderStyle: 'solid',
                                borderColor: theme.palette.primary.main,
                                padding: '8px',
                                borderRadius: '8px',
                                gap: '0',
                            })}
                            key={field.id}
                        >
                            <BaseField label="Заголовок" {...register(`customBlocks.${index}.title` as const)} />
                            <Controller
                                control={control}
                                name={`customBlocks.${index}.text`}
                                render={({ field: { onChange, value } }) => (
                                    <TextEditor index={index} onChange={onChange} value={value} />
                                )}
                            />

                            <BaseButton color="error" type="button" onClick={() => removeCustomBlock(index)}>
                                Удалить блок
                            </BaseButton>
                        </Stack>
                    ))}
                    <BaseButton
                        color="success"
                        variant="outlined"
                        type="button"
                        onClick={() =>
                            appendCustomBlock({
                                id: 0,
                                title: '',
                                text: '',
                            })
                        }
                    >
                        Добавить блок
                    </BaseButton>
                </Stack>
                <BaseField
                    multiline
                    label="Цель проекта"
                    required
                    fullWidth
                    autoComplete="off"
                    {...register('aim')}
                    error={Boolean(errors.aim)}
                    helperText={errors.aim?.message}
                />
                <BaseField
                    multiline
                    label="Проблема"
                    required
                    fullWidth
                    autoComplete="off"
                    {...register('problem')}
                    error={Boolean(errors.problem)}
                    helperText={errors.problem?.message}
                />
                <BaseField
                    multiline
                    label="Идея"
                    fullWidth
                    required
                    autoComplete="off"
                    {...register('idea')}
                    error={Boolean(errors.idea)}
                    helperText={errors.idea?.message}
                />
                <BaseField
                    multiline
                    label="Решение"
                    required
                    fullWidth
                    autoComplete="off"
                    {...register('solution')}
                    error={Boolean(errors.solution)}
                    helperText={errors.solution?.message}
                />
                <BaseField label="Заказчик" fullWidth autoComplete="off" {...register('client')} />
                <BaseField label="ID видео" fullWidth autoComplete="off" {...register('videoUrl')} />
                <BaseField
                    label="Приоритетность"
                    type="number"
                    {...register('priority', { valueAsNumber: true })}
                    error={Boolean(errors.priority)}
                    helperText={errors.priority?.message}
                />

                {/* <FormControl fullWidth>
                        <InputLabel id="semester">Семестр</InputLabel>
                        <Controller
                            control={control}
                            name={'semester'}
                            render={({ field: { onChange, onBlur, value } }) => (
                                <Select
                                    onChange={onChange}
                                    onBlur={onBlur}
                                    value={value}
                                    labelId="semester"
                                    id="demo-simple-select"
                                    label="Семестр"
                                    error={Boolean(errors.semester)}
                                >
                                    <MenuItem value={Semester.None}>Отсутствует</MenuItem>
                                    <MenuItem value={Semester.Spring}>Весенний</MenuItem>
                                    <MenuItem value={Semester.Autumn}>Осенний</MenuItem>
                                </Select>
                            )}
                        />
                    </FormControl> */}
                <BaseField
                    label="Период"
                    placeholder="2022/2023"
                    fullWidth
                    autoComplete="off"
                    {...register('period')}
                    error={Boolean(errors.period)}
                    helperText={errors.period?.message}
                />
                <Stack spacing={2}>
                    <Typography>Команда:</Typography>
                    {userFields.map((field, index) => (
                        <Stack
                            sx={theme => ({
                                borderWidth: '1px',
                                borderStyle: 'solid',
                                borderColor: theme.palette.primary.main,
                                padding: '8px',
                                borderRadius: '8px',
                                gap: '4px',
                            })}
                            key={field.id}
                        >
                            <BaseField required label="Фамилия" {...register(`users.${index}.lastName` as const)} />
                            <BaseField required label="Имя" {...register(`users.${index}.firstName` as const)} />
                            <BaseField label="Отчество" {...register(`users.${index}.patronymic` as const)} />
                            <BaseField label="Контакты" {...register(`users.${index}.email` as const)} />
                            <Controller
                                control={control}
                                name={`users.${index}.roles`}
                                render={({ field: { onChange, onBlur, value } }) => (
                                    <Autocomplete
                                        multiple
                                        options={rolesOptions}
                                        onChange={(_, targetValue) => onChange(targetValue)}
                                        onBlur={onBlur}
                                        value={value}
                                        freeSolo
                                        renderTags={(value, getTagProps) =>
                                            value.map((option, index) => (
                                                <Chip
                                                    variant="outlined"
                                                    label={option}
                                                    {...getTagProps({ index })}
                                                    key={option}
                                                />
                                            ))
                                        }
                                        renderInput={params => (
                                            <BaseField
                                                {...params}
                                                label="Роли"
                                                required
                                                onKeyDown={(e: KeyboardEvent<HTMLInputElement>) => {
                                                    if (e.key === 'Enter') {
                                                        e.preventDefault();
                                                        const input = e.target as HTMLInputElement;
                                                        if (input.value.trim() !== '') {
                                                            onChange([...value, input.value.trim()]);
                                                            input.value = '';
                                                        }
                                                    }
                                                }}
                                            />
                                        )}
                                    />
                                )}
                            />

                            <BaseButton color="error" type="button" onClick={() => removeUser(index)}>
                                Удалить
                            </BaseButton>
                        </Stack>
                    ))}
                    <BaseButton
                        color="success"
                        variant="outlined"
                        type="button"
                        onClick={() =>
                            appendUser({
                                id: 0,
                                email: '',
                                firstName: '',
                                lastName: '',
                                roles: [],
                            })
                        }
                    >
                        Добавить пользователя
                    </BaseButton>
                </Stack>
            </Stack>
            <Stack direction="row" justifyContent="center" spacing={2}>
                <BaseButton variant="contained" onClick={handleSubmit(onCreationSubmit)}>
                    Создать проект
                </BaseButton>
                <BaseButton disabled={project === undefined} onClick={handleSubmit(onUpdateSubmit)} variant="contained">
                    Редактировать проект
                </BaseButton>
            </Stack>
            {/* TODO: подумать над семантическим решением и убрать костыли с loading стейтом */}
            {isCreationProjectLoading && <Typography>Проект создается...</Typography>}
            {projectCreationErrors && <Typography>При создании проекта что-то пошло не так</Typography>}
            {isEditProjectLoading && <Typography>Редактируем проект...</Typography>}
            {projectEditErrors && <Typography>При редактировании проекта что-то пошло не так</Typography>}
        </Stack>
    );
});
