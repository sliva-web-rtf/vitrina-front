'use client';

import { Slider } from '@/features/slider';
import { memo } from 'react';
import styles from './Gallery.module.scss';
import { Image } from './Image/Image';

interface GalleryProps {
    readonly images: Array<string>;
}

export const Gallery = memo((props: GalleryProps) => {
    const { images } = props;

    const items = images.map((image, index) => (
        <Image key={image} src={image} className={styles.image} alt={`gallery-img-${index}`} />
    ));

    return <Slider name="gallery" items={items} />;
});
Gallery.displayName = 'Gallery';
