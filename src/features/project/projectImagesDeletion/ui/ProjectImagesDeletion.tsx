import { BaseButton, BaseField } from '@/shared/ui';
import { Stack, Typography } from '@mui/material';
import { useDeleteImagesMutation } from '../api/projectImagesDeletionApi';
import { useState } from 'react';

export const ProjectImagesDeletion = () => {
    const [projectId, setID] = useState<number>(0);
    const [deleteImages, { isLoading, error }] = useDeleteImagesMutation();

    const onDeleteClick = async () => {
        if (!projectId) return;
        await deleteImages(projectId);
    };

    return (
        <Stack spacing={2}>
            <BaseField
                label="ID проекта"
                type="number"
                value={projectId}
                onChange={event => setID(Number(event.target.value))}
                helperText="Внимание, удалятся абсолютно все картинки проекта"
            />
            <BaseButton type="submit" color="error" variant="contained" onClick={onDeleteClick} disabled={isLoading}>
                Удалить
            </BaseButton>
            {isLoading && <Typography>Loading...</Typography>}
            {error && <Typography color="error">Что-то пошло не так</Typography>}
        </Stack>
    );
};
