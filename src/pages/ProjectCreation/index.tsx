import { baseApi } from '@/shared/api';
import { BaseButton, BaseField } from '@/shared/ui';
import { Box, Stack, Typography } from '@mui/material';
import { useRef, useState } from 'react';
import { useFieldArray, useForm } from 'react-hook-form';

// TODO: нужно исключительно для упрощения заполнения бд

interface Userr {
    email: string;
    firstName: string;
    lastName: string;
    patronymic: string;
    roles: string;
}

interface Creation {
    name: string;
    description: string;
    aim: string;
    client: string;
    semester: number;
    period: string;
    users: Userr[];
}

const projectCreationApi = baseApi.injectEndpoints({
    endpoints: build => ({
        createProject: build.mutation<string, Creation>({
            query: project => ({
                method: 'POST',
                url: 'project/create',
                body: {
                    ...project,
                    users: project.users.map(user => ({
                        ...user,
                        roles: user.roles && user.roles !== '' ? [{ name: user.roles }] : [],
                    })),
                },
            }),
        }),
        uploadImages: build.mutation<void, { formData: FormData; id: number }>({
            query: ({ formData, id }) => ({
                method: 'POST',
                url: `project/project/${id}/upload-images`,
                body: formData,
            }),
        }),
    }),
});

export const { useCreateProjectMutation, useUploadImagesMutation } = projectCreationApi;

export const ProjectCreation = () => {
    const [createProject, { isLoading: isProjectLoading, error: projectErrors }] = useCreateProjectMutation();
    const [uploadAvatars, { isLoading: isAvatarsLoading, error: avatarsErrors }] = useUploadImagesMutation();
    const form = useForm<Creation>({});

    const { register, control, handleSubmit } = form;
    const inputRef = useRef<null | HTMLInputElement>(null);
    const [id, setID] = useState(0);

    const {
        fields: userFields,
        append: appendUser,
        remove: removeUser,
    } = useFieldArray({
        name: 'users',
        control,
    });

    const onSubmit = async (data: Creation) => {
        const response = await createProject(data);
        if ('data' in response) {
            setID(Number(response.data));
        }
    };

    return (
        <Box sx={{ width: '1000px', margin: '0 auto' }}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Typography sx={{ textAlign: 'center' }}>Создание проекта</Typography>
                <br></br>
                <br></br>
                <Typography sx={{ color: 'red' }}>Первый этап:</Typography>
                <BaseField autoFocus label="Название" fullWidth autoComplete="false" {...register('name')} />
                <BaseField
                    multiline
                    autoFocus
                    label="Описание"
                    fullWidth
                    autoComplete="false"
                    {...register('description')}
                />
                <BaseField autoFocus label="Цель" fullWidth autoComplete="false" {...register('aim')} />
                <BaseField autoFocus label="Заказчик" fullWidth autoComplete="false" {...register('client')} />
                <br></br>
                <br></br>
                <br></br>
                <Box sx={{ padding: '4px', border: '1px solid black' }}>
                    <Typography>0 = None; 1 = Spring; 2 = Autumn</Typography>
                    <BaseField
                        type="number"
                        autoFocus
                        label="Семестр"
                        fullWidth
                        autoComplete="false"
                        {...register('semester')}
                    />
                </Box>
                <br></br>
                <br></br>
                <Box sx={{ padding: '4px', border: '1px solid black' }}>
                    <Typography>Например: 2022/2023</Typography>
                    <BaseField autoFocus label="Период" fullWidth autoComplete="false" {...register('period')} />
                </Box>
                <br></br>
                <br></br>
                <Stack spacing={2}>
                    <Typography>Команда:</Typography>
                    {userFields.map((field, index) => (
                        <Box sx={{ border: '1px solid blue', padding: '8px' }} key={field.id}>
                            <BaseField label="Имя" {...register(`users.${index}.firstName` as const)} />
                            <BaseField label="Фамилия" {...register(`users.${index}.lastName` as const)} />
                            <BaseField label="Отчество" {...register(`users.${index}.patronymic` as const)} />
                            <BaseField label="Почта" {...register(`users.${index}.email` as const)} />
                            <BaseField label="Роль" {...register(`users.${index}.roles` as const)} />

                            <BaseButton color="error" type="button" onClick={() => removeUser(index)}>
                                Удалить
                            </BaseButton>
                        </Box>
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
                                roles: '',
                            })
                        }
                    >
                        Добавить пользователя
                    </BaseButton>
                </Stack>
                <br />
                <br />
                {isProjectLoading && <Typography>Loading...</Typography>}
                <BaseButton type="submit" variant="contained">
                    Создать проект
                </BaseButton>
                {projectErrors && <Typography>Что-то пошло не так</Typography>}
                <br></br>
            </form>
            <br></br>
            <br></br>
            <Typography sx={{ color: 'red' }}>Второй этап:</Typography>
            <br></br>
            <Stack spacing={2} direction={'column'}>
                <BaseField
                    label="Id проекта"
                    type="number"
                    value={id}
                    onChange={event => setID(Number(event.target.value))}
                />
                <input type="file" ref={inputRef} multiple accept="image/png, image/jpeg" />
                <Box>
                    <BaseButton
                        onClick={async () => {
                            if (inputRef != null) {
                              const files = inputRef.current?.files;
                              if (files) {
                                const formData = new FormData();
                                const filesConverted: File[] = Array.from(files);
                                filesConverted.forEach(file => {
                                    formData.append('files', file);
                                });
                                await uploadAvatars({formData, id});
                              } 
                            }
                        }}
                        variant="contained"
                    >
                        Загрузить картинки
                    </BaseButton>
                    {isAvatarsLoading && <Typography>Loading...</Typography>}
                    {avatarsErrors && <Typography>Что-то пошло не так</Typography>}
                </Box>
            </Stack>
        </Box>
    );
};
