import { Image } from '../types/image';

export const transformImageDtoToString = (image: Image) => {
    if (!image?.imageUrl) return null;

    return `${process.env.NEXT_PUBLIC_IMAGES_PATH}${image.imageUrl}`;
};
