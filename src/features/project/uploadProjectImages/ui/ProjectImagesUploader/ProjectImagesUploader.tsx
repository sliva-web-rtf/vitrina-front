import { BaseButton, BaseField } from '@/shared/ui';
import { memo, useEffect, useRef, useState } from 'react';
import { useUploadImagesMutation } from '../../api/projectImagesApi';
import { Stack, Typography } from '@mui/material';
import { AppError, EntityValidationErrors } from '@/shared/lib/types/appError';
import { toast } from 'react-toastify';
import { UploadProjectImagesSchema } from '../../model/types/UploadProjectImagesSchema';
import { uploadImageUploadError } from '../../model/const/uploadImageUploadError';

interface ProjectImagesUploaderProps {
    id?: number;
}

export const ProjectImagesUploader = memo((props: ProjectImagesUploaderProps) => {
    const { id } = props;

    const [projectId, setID] = useState<number>(0);

    const inputRef = useRef<null | HTMLInputElement>(null);

    const [uploadAvatars, { isLoading: isAvatarsLoading, error: avatarsErrors }] = useUploadImagesMutation();

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
            <input type="file" ref={inputRef} multiple accept="image/png, image/jpeg, image/jpeg+-" />
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
