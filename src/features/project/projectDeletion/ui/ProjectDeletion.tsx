import { BaseButton, BaseField } from '@/shared/ui'
import { Stack, Typography } from '@mui/material'
import { memo, useCallback, useState } from 'react';
import { useDeleteProjectMutation } from '../api/projectDeletionApi';

export const ProjectDeletion = memo(() => {
    const [deleteProject, {isLoading, error}] = useDeleteProjectMutation()

    const [projectId, setID] = useState<number>(0);
    const onDeleteClick = useCallback(async () => {
        await deleteProject(projectId)
    }, [deleteProject, projectId])

    return (
        <Stack spacing={2}>
            <BaseField
                    placeholder="Id проекта"
                    type="number"
                    value={projectId}
                    onChange={event => setID(Number(event.target.value))}
                />
            <BaseButton
                color="error"
                onClick={onDeleteClick}
                variant="contained"
            >
                Удалить
            </BaseButton>
            {isLoading && <Typography>Loading...</Typography>}
            {error && <Typography>Что-то пошло не так</Typography>}
        </Stack>
    )
})
