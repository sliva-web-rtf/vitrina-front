import { Stack, Typography } from '@mui/material';
import { useCallback, useEffect, useState } from 'react';
import { ProjectCreationForm } from '@/widgets/ProjectCreation';
import { ProjectImagesUploader } from '@/features/project/uploadProjectImages';
import { ProjectDeletion } from '@/features/project/projectDeletion';
import { ProjectPreviewImageUploader } from '@/features/project/uploadProjectImages/ui/ProjectPreviewImageUploader/ProjectPreviewImageUploader';
import { useSelector } from 'react-redux';
import { detailsActions, getEditableProject } from '@/entities/project';
import { useAppDispatch } from '@/shared/hooks/useAppDispatch/useAppDispatch';
import { useLazyGetDetailsQuery } from '@/widgets/Details';

const AdminPage = () => {
    const dispatch = useAppDispatch();
    const editableProject = useSelector(getEditableProject);
    const [getDetails] = useLazyGetDetailsQuery()

    const [id, setID] = useState<number | null>(null);

    const onProjectCreationSuccess = useCallback(
        async (id: number) => {
            setID(id);
            // TODO: Пересмотреть всю эту логику работы. Нужно после создания давать перенаправлять на детали.
            const response = await getDetails(id);
            if ('data' in response) {
                dispatch(
                    detailsActions.changeEditableProject(response.data),
                );
            }
        },
        [dispatch, getDetails],
    );

    useEffect(() => {
        return () => {
            dispatch(detailsActions.changeEditableProject(undefined));
        };
    }, [dispatch]);

    return (
        <Stack spacing={3} sx={{ maxWidth: 'var(--max-width-admin-container)', margin: '0 auto' }}>
            <Typography variant="h3">Создание проекта:</Typography>
            <Typography sx={{ color: 'red' }}>Первый этап:</Typography>
            <ProjectCreationForm project={editableProject} onSuccess={onProjectCreationSuccess} />
            <Typography sx={{ color: 'red' }}>Второй этап (загрузка картинок):</Typography>
            <Typography>Картинки для страницы детальной информации</Typography>
            <ProjectImagesUploader id={id ?? undefined} />
            <Typography>Preview картинка</Typography>
            <ProjectPreviewImageUploader id={id ?? undefined} />
            <Typography variant="h3">Удаление проекта</Typography>
            <ProjectDeletion />
        </Stack>
    );
};

export default AdminPage;
