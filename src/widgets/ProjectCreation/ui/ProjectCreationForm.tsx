import { Controller, useFieldArray, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ProjectCreationFormSchema, projectCreationFormSchema } from '../model/types/projectCreationForm';
import { useCreateProjectMutation, useUpdateProjectMutation } from '../api/projectCreationApi';
import { Autocomplete, Chip, FormControl, InputLabel, MenuItem, Select, Stack, Typography } from '@mui/material';
import { memo, useCallback, useState } from 'react';
import { TextEditor } from '@/widgets/TextEditor';
import { BaseButton, BaseField } from '@/shared/ui';
import { ProjectDetails } from '@/entities/project';
import { Semester } from '@/entities/semester';

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

    const [customValue, setCustomValue] = useState(project?.customTemplate ?? '');

    const onCustomValueChange = useCallback((value: string) => {
        setCustomValue(value);
    }, []);

    const form = useForm<ProjectCreationFormSchema>({
        mode: 'onBlur',
        resolver: zodResolver(projectCreationFormSchema),
        defaultValues: {
            priority: project?.priority ?? 0,
            name: project?.name,
            client: project?.client,
            description: project?.description,
            users: project?.users.map(user => ({
                ...user,
                fullname: `${user.lastName} ${user.firstName} ${user.patronymic}`,
            })),
            videoUrl: project?.videoUrl,
            semester: project?.semester,
            period: project?.period,
        },
    });

    const {
        register,
        formState: { errors },
        control,
        handleSubmit,
    } = form;

    const {
        fields: userFields,
        append: appendUser,
        remove: removeUser,
    } = useFieldArray({
        name: 'users',
        control,
    });

    const onCreationSubmit = async (data: ProjectCreationFormSchema) => {
        const response = await createProject({ ...data, customTemplate: customValue });
        if ('data' in response) {
            onSuccess?.(Number(response.data), { ...data, customTemplate: customValue });
        }
    };

    const onUpdateSubmit = async (data: ProjectCreationFormSchema) => {
        if (project?.id) {
            const response = await editProject({ ...data, customTemplate: customValue, id: project.id });
            if ('data' in response) {
                onSuccess?.(project.id, { ...data, customTemplate: customValue });
            }
        }
    };

    return (
        <Stack spacing={2}>
            <form>
                <Stack spacing={2}>
                    <TextEditor value={customValue} onChange={onCustomValueChange} />
                    <BaseField
                        autoFocus
                        label="Название"
                        fullWidth
                        autoComplete="false"
                        {...register('name')}
                        error={Boolean(errors.name)}
                        helperText={errors.name?.message}
                    />
                    <BaseField
                        multiline
                        autoFocus
                        label="Описание карточки на главной странице"
                        fullWidth
                        autoComplete="false"
                        {...register('description')}
                    />
                    <BaseField autoFocus label="Заказчик" fullWidth autoComplete="false" {...register('client')} />
                    <BaseField autoFocus label="ID видео" fullWidth autoComplete="false" {...register('videoUrl')} />
                    <BaseField
                        placeholder="Приоритетность"
                        type="number"
                        {...register('priority', { valueAsNumber: true })}
                        error={Boolean(errors.priority)}
                        helperText={errors.priority?.message}
                    />

                    <FormControl fullWidth>
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
                                    {/* TODO: вынести все значения title в отдельную общую переменную в semester entity */}
                                    <MenuItem value={Semester.None}>Отсутствует</MenuItem>
                                    <MenuItem value={Semester.Spring}>Весенний</MenuItem>
                                    <MenuItem value={Semester.Autumn}>Осенний</MenuItem>
                                </Select>
                            )}
                        />
                    </FormControl>
                    <BaseField
                        autoFocus
                        label="Период"
                        placeholder="2022/2023"
                        fullWidth
                        autoComplete="false"
                        {...register('period')}
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
                                <BaseField label="ФИО" {...register(`users.${index}.fullname` as const)} />
                                <BaseField label="Почта" {...register(`users.${index}.email` as const)} />
                                <Controller
                                    control={control}
                                    name={`users.${index}.roles`}
                                    render={({ field: { onChange, onBlur, value } }) => (
                                        <Autocomplete
                                            multiple
                                            options={[]}
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
                                            renderInput={params => <BaseField {...params} label="Роли" />}
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
                                    fullname: '',
                                    roles: [],
                                })
                            }
                        >
                            Добавить пользователя
                        </BaseButton>
                    </Stack>
                </Stack>
            </form>
            <Stack direction="row" justifyContent="center" spacing={2}>
                <BaseButton onClick={handleSubmit(onCreationSubmit)} variant="contained">
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
