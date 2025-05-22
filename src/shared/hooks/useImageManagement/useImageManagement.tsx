import { useState } from 'react';

export const useImageManagement = () => {
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
    };

    return { imageUrl, imageBlob, handleImageUpload, handleDelete };
};
