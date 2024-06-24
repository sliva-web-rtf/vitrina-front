import { Stack, Typography } from '@mui/material';
import { useCallback, useEffect, useState } from 'react';
import { ProjectCreationForm, ProjectCreationFormSchema } from '@/widgets/ProjectCreation';
import { ProjectImagesUploader } from '@/features/project/uploadProjectImages';
import { ProjectDeletion } from '@/features/project/projectDeletion';
import { ProjectPreviewImageUploader } from '@/features/project/uploadProjectImages/ui/ProjectPreviewImageUploader/ProjectPreviewImageUploader';
import { useSelector } from 'react-redux';
import { detailsActions, getEditableProject } from '@/entities/project';
import { useAppDispatch } from '@/shared/hooks/useAppDispatch/useAppDispatch';

const AdminPage = () => {
    const dispatch = useAppDispatch()
    const editableProject = useSelector(getEditableProject);

    const [id, setID] = useState<number | null>(null);

    const onProjectCreationSuccess = useCallback((id: number, project: ProjectCreationFormSchema) => {
        setID(id);
        // TODO: Попросить бек возращать ProjectDetails с запроса на создание и редактирование.
        dispatch(detailsActions.changeEditableProject({id, ...project, contents: [], tags: [], previewImagePath: null }))
    }, []);

    useEffect(() => {
        return () => {
            if (editableProject?.id) {
                dispatch(detailsActions.changeEditableProject(undefined))
            } 
        }
    })

    return (
        <Stack spacing={3} sx={{ maxWidth: 'var(--max-width-admin-container)', margin: '0 auto' }}>
            <Typography variant='h3'>Создание проекта:</Typography>
            <Typography sx={{ color: 'red' }}>Первый этап:</Typography>
            <ProjectCreationForm project={editableProject} onSuccess={onProjectCreationSuccess} />
            <Typography sx={{ color: 'red' }}>Второй этап (загрузка картинок):</Typography>
            <Typography>Картинки для страницы детальной информации</Typography>
            <ProjectImagesUploader id={id ?? undefined} />
            <Typography>Preview картинка</Typography>
            <ProjectPreviewImageUploader id={id ?? undefined} />
            <Typography variant='h3'>Удаление проекта</Typography>
            <ProjectDeletion />
        </Stack>
    );
};

export default AdminPage;
