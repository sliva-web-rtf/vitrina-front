import { Avatar, Stack } from '@mui/material';
import { memo, useMemo, useState } from 'react';
import { Image } from '@/shared/lib/types/image.ts';
import { bytesToImage } from '@/shared/lib/helpers/bytesToImage';
import classNames from './Gallery.module.scss';

interface GalleryProps {
    readonly imagesBytes: Array<Image>;
}

export const Gallery = memo((props: GalleryProps) => {
    const { imagesBytes } = props;
    const images = useMemo(() => imagesBytes.map(bytes => bytesToImage(bytes)), [imagesBytes]);
    const [mainImage, setMainImage] = useState(images[0]!);
    const [thumbnails, setThumbnails] = useState(images.slice(1));
    // const [thumbnails, setThumbnails] = useState([
    //     'https://placehold.co/400',
    //     'https://placehold.co/500',
    //     'https://placehold.co/600',
    //     'https://placehold.co/700',
    //     'https://placehold.co/800',
    // ]);

    const handleThumbnailClick = (clickedImage: string) => {
        setMainImage(clickedImage);
        setThumbnails(prevThumbnails => {
            const newThumbnails = prevThumbnails.filter(image => image !== clickedImage);
            return [mainImage, ...newThumbnails];
        });
    };

    return (
        <Stack className={classNames.gallery}>
            <Avatar className={classNames.mainImage} variant="square" src={mainImage} alt={mainImage} />
            <Stack className={classNames.thumbnails}>
                {thumbnails.map(image => (
                    <Avatar
                        key={image}
                        src={image}
                        alt={image}
                        onClick={() => handleThumbnailClick(image as string)}
                        sx={{
                            cursor: 'pointer',
                            width: '100%',
                            height: 'auto',
                        }}
                    />
                ))}
            </Stack>
        </Stack>
    );
});
