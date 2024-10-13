'use client';

import { HStack } from '@/shared/ui';
import { memo, useState } from 'react';
import styles from './Gallery.module.scss';
import { Image } from './Image/Image';

interface GalleryProps {
    readonly images: Array<string>;
    readonly alt?: string;
}

// export const Gallery = memo((props: GalleryProps) => {
//     const { images, alt } = props;
//     const [mainImage, setMainImage] = useState(images[0]!);
//     const [thumbnails, setThumbnails] = useState(images.slice(1, 5));

//     const handleThumbnailClick = (clickedImage: string) => {
//         setMainImage(clickedImage);
//         setThumbnails((prevThumbnails) => {
//             const newThumbnails = prevThumbnails.filter((image) => image !== clickedImage);
//             return [mainImage, ...newThumbnails];
//         });
//     };

//     return (
//         <Stack className={classNames.gallery}>
//             <Image src={mainImage} className={`${classNames.mainImage} ${mainImage ? '' : classNames.empty}`} alt="" />
//             <Stack className={classNames.thumbnails}>
//                 {thumbnails.map((image) => (
//                     <Avatar
//                         key={image}
//                         src={image}
//                         className={classNames.thumbnail}
//                         alt={alt ?? 'Картинка проекта'}
//                         onClick={() => handleThumbnailClick(image as string)}
//                     />
//                 ))}
//             </Stack>
//         </Stack>
//     );
// });

export const Gallery = memo((props: GalleryProps) => {
    const { images, alt } = props;
    const [mainImage, setMainImage] = useState(images[0]!);
    const [thumbnails, setThumbnails] = useState(images.slice(1, 5));

    const handleThumbnailClick = (clickedImage: string) => {
        setMainImage(clickedImage);
        setThumbnails((prevThumbnails) => {
            const newThumbnails = prevThumbnails.filter((image) => image !== clickedImage);
            return [mainImage, ...newThumbnails];
        });
    };

    return (
        <HStack className={styles.gallery}>
            {images.map((image) => (
                <Image key={image} src={image} className={styles.image} alt={alt} width={500} />
            ))}
        </HStack>
    );
});
Gallery.displayName = 'Gallery';
