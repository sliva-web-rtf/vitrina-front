import { Slider } from '@/features/slider';
import { Image } from './Image/Image';

interface GalleryProps {
    images: string[];
}

export const Gallery = (props: GalleryProps) => {
    const { images } = props;

    const items = images.map((image, index) => {
        return <Image key={image} src={image} alt={`gallery-img-${index}`} />;
    });

    return <Slider items={items} amountPerSlide={2} />;
};
