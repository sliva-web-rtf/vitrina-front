import { Image } from '@/shared/lib/types/image.ts';

const getMimeType = (bytes: Uint8Array): string => {
    const header = bytes.slice(0, 4).join(' ');

    switch (header) {
        case '137 80 78 71':
            return 'image/png';
        case '255 216 255 224':
        case '255 216 255 225':
            return 'image/jpeg';
        case '82 73 70 70':
            return 'image/webp';
        default:
            return 'application/octet-stream'; // Fallback for unknown types
    }
};

export const bytesToImage = (image: Image): string | undefined => {
    const { imageBytes } = image;
    if (!imageBytes) {
        return undefined;
    }
    const type = getMimeType(imageBytes);
    const blob = new Blob([imageBytes], { type });

    return URL.createObjectURL(blob);
};
