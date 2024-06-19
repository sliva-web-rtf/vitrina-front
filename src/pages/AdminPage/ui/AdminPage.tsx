import { baseApi } from '@/shared/api';
import { Stack, Typography } from '@mui/material';
import { useCallback, useState } from 'react';
import { ProjectCreationForm } from '@/widgets/ProjectCreation';
import { ProjectImagesUploader } from '@/features/project/uploadProjectImages';
import { ProjectDeletion } from '@/features/project/projectDeletion';

const projectCreationApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        deleteProject: build.mutation<string, string>({
            query: (id) => ({
                method: 'DELETE',
                url: `project/${id}`,
            }),
        }),
    }),
});

export const { useDeleteProjectMutation } = projectCreationApi;

const AdminPage = () => {
    const [id, setID] = useState<number | null>(null);

    const onProjectCreationSuccess = useCallback((id: number) => {
        setID(id);
    }, []);

    return (
        <Stack spacing={3} sx={{ maxWidth: 'var(--max-width-admin-container)', margin: '0 auto' }}>
            <Typography variant='h3'>Создание проекта:</Typography>
            <Typography sx={{ color: 'red' }}>Первый этап:</Typography>
            <ProjectCreationForm onSuccess={onProjectCreationSuccess} />
            <Typography sx={{ color: 'red' }}>Второй этап (загрузка картинок):</Typography>
            <ProjectImagesUploader id={id ?? undefined} />
            <Typography variant='h3'>Удаление проекта</Typography>
            <ProjectDeletion />
        </Stack>
    );
};

export default AdminPage;
