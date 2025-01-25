import { AppError, EntityValidationErrors } from '@/shared/lib/types/appError';
import { BaseButton, BaseField } from '@/shared/ui';
import { Stack, Typography } from '@mui/material';
import { memo, useEffect, useRef, useState } from 'react';
import { toast } from 'react-toastify';
import { useUploadPreviewImageMutation } from '../../api/projectImagesApi';
import { uploadImageUploadError } from '../../model/const/uploadImageUploadError';
import { UploadProjectImagesSchema } from '../../model/types/UploadProjectImagesSchema';

interface ProjectPreviewImageUploaderProps {
    id?: number;
}

export const ProjectPreviewImageUploader = memo((props: ProjectPreviewImageUploaderProps) => {
    const { id } = props;

    const [projectId, setID] = useState<number>(0);

    const inputRef = useRef<null | HTMLInputElement>(null);

    const [uploadAvatars, { isLoading: isAvatarsLoading, error: avatarsErrors }] = useUploadPreviewImageMutation();

    const onValidationError = (validationData: EntityValidationErrors<UploadProjectImagesSchema> | undefined) =>
        toast.error(validationData?.file || uploadImageUploadError);

    useEffect(() => {
        if (id) {
            setID(id);
        }
    }, [id]);

    return (
        <Stack spacing={2}>
            <BaseField
                placeholder="Id проекта"
                type="number"
                value={projectId}
                onChange={event => setID(Number(event.target.value))}
            />
            <input type="file" ref={inputRef} accept="image/webp, image/png, image/jpeg" />
            <BaseButton
                onClick={async () => {
                    if (inputRef != null) {
                        const files = inputRef.current?.files;
                        if (files) {
                            const formData = new FormData();
                            const filesConverted: File[] = Array.from(files);
                            filesConverted.forEach(file => {
                                formData.append('file', file);
                            });
                            await uploadAvatars({ formData, id: projectId });
                            const response = await uploadAvatars({ formData, id: projectId });
                            if ('error' in response && response.error instanceof AppError) {
                                onValidationError(response.error.validationData);
                            }
                        }
                    }
                }}
                variant="contained"
            >
                Загрузить картинки
            </BaseButton>
            {isAvatarsLoading && <Typography>Loading...</Typography>}
            {avatarsErrors && <Typography>Что-то пошло не так</Typography>}
        </Stack>
    );
});
