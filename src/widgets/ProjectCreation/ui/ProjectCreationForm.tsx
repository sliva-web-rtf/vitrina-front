import { Controller, useFieldArray, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ProjectCreationFormSchema, projectCreationFormSchema } from '../model/types/projectCreationForm';
import { useCreateProjectMutation } from '../api/projectCreationApi';
import { Autocomplete, Chip, FormControl, InputLabel, MenuItem, Select, Stack, Typography } from '@mui/material';
import { memo, useCallback, useState } from 'react';
import { TextEditor } from '@/widgets/TextEditor';
import { BaseButton, BaseField } from '@/shared/ui';

interface ProjectCreationFormProps {
    onSuccess?: (id: number) => void;
}

export const ProjectCreationForm = memo((props: ProjectCreationFormProps) => {
    const { onSuccess } = props;
    const [createProject, { isLoading: isProjectLoading, error: projectErrors }] = useCreateProjectMutation();

    const [customValue, setCustomValue] = useState('');

    const onCustomValueChange = useCallback((value: string) => {
        setCustomValue(value);
    }, []);

    const form = useForm<ProjectCreationFormSchema>({
        mode: 'onBlur',
        resolver: zodResolver(projectCreationFormSchema),
    });

    const { register, formState: { errors }, control, handleSubmit } = form;

    const {
        fields: userFields,
        append: appendUser,
        remove: removeUser,
    } = useFieldArray({
        name: 'users',
        control,
    });

    const onSubmit = async (data: ProjectCreationFormSchema) => {
        const response = await createProject({ ...data, customTemplate: customValue });
        if ('data' in response) {
            onSuccess?.(Number(response.data));
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            {}
            <Stack spacing={2}>
                <TextEditor value={customValue} onChange={onCustomValueChange} />
                <BaseField autoFocus label="Название" fullWidth autoComplete="false" {...register('name')} error={Boolean(errors.name)}
                helperText={errors.name?.message} />
                <BaseField
                    multiline
                    autoFocus
                    label="Описание карточки на главной странице"
                    fullWidth
                    autoComplete="false"
                    {...register('description')}
                />
                <BaseField autoFocus label="Цель" fullWidth autoComplete="false" {...register('aim')} />
                <BaseField autoFocus label="Заказчик" fullWidth autoComplete="false" {...register('client')} />
                <BaseField autoFocus label="ID видео" fullWidth autoComplete="false" {...register('videoUrl')} />
                <BaseField
                placeholder="Приоритетность"
                type="number"
                {...register('priority', {valueAsNumber: true })} 
                error={Boolean(errors.priority)}
                helperText={errors.priority?.message}
            />

                <FormControl fullWidth>
                    <InputLabel id="semester">Семестр</InputLabel>
                    <Select defaultValue={0} labelId="semester" id="demo-simple-select" label="Семестр" {...register('semester')} error={Boolean(errors.semester)}>
                        <MenuItem value={0}>Отсутствует</MenuItem>
                        <MenuItem value={1}>Весенний</MenuItem>
                        <MenuItem value={2}>Осенний</MenuItem>
                    </Select>
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
                            sx={(theme) => ({
                                borderWidth: '1px',
                                borderStyle: 'solid',
                                borderColor: theme.palette.primary.main,
                                padding: '8px',
                                borderRadius: '8px',
                                gap: '4px',
                            })}
                            key={field.id}
                        >
                            <BaseField label="Имя" {...register(`users.${index}.firstName` as const)} />
                            <BaseField label="Фамилия" {...register(`users.${index}.lastName` as const)} />
                            <BaseField label="Отчество" {...register(`users.${index}.patronymic` as const)} />
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
                                                <Chip variant="outlined" label={option} {...getTagProps({ index })} />
                                            ))
                                        }
                                        renderInput={(params) => <BaseField {...params} label="Роли" />}
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
                                email: '',
                                firstName: '',
                                lastName: '',
                                patronymic: '',
                                roles: [],
                            })
                        }
                    >
                        Добавить пользователя
                    </BaseButton>
                </Stack>
                {isProjectLoading && <Typography>Loading...</Typography>}
                <BaseButton type="submit" variant="contained">
                    Создать проект
                </BaseButton>
                {projectErrors && <Typography>Что-то пошло не так</Typography>}
            </Stack>
        </form>
    );
});
