'use client';

import { Slider } from '@/features/slider';
import { memo, useMemo } from 'react';
import { Image } from './Image/Image';

interface GalleryProps {
    readonly images: Array<string>;
}

export const Gallery = memo((props: GalleryProps) => {
    const { images } = props;

    const items = images.map((image, index) => <Image key={image} src={image} alt={`gallery-img-${index}`} />);

    const itemWidth = useMemo(() => {
        const width = window.innerWidth;
        return width > 600 ? 600 : width * 0.8;
    }, []);

    return <Slider items={items} itemWidth={itemWidth} />;
});

Gallery.displayName = 'Gallery';
