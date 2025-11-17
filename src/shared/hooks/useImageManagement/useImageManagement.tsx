import { RefObject, useState } from 'react';

import { INITIAL_WIDTH, ASPECT_RATIO } from '../../lib/const/imageSize';

export const useImageManagement = (boxRef: RefObject<HTMLDivElement>) => {
    const [imageUrl, setImageUrl] = useState<string | null>(null);
    const [imageBlob, setImageBlob] = useState<Blob | null>(null);

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            if (imageUrl) URL.revokeObjectURL(imageUrl);
            const url = URL.createObjectURL(file);
            setImageUrl(url);
            setImageBlob(file);
        }
    };

    const handleDelete = () => {
        if (imageUrl) URL.revokeObjectURL(imageUrl);
        setImageUrl(null);
        setImageBlob(null);
        const box = boxRef.current;
        if (!box) return;

        box.style.width = `${INITIAL_WIDTH}px`;
        box.style.height = `${INITIAL_WIDTH / ASPECT_RATIO}px`;
    };

    return { imageUrl, imageBlob, handleImageUpload, handleDelete };
};
