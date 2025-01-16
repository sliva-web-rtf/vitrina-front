import { Slider } from '@/features/slider';
import styles from './Gallery.module.scss';
import { Image } from './Image/Image';

interface GalleryProps {
    images: (string | null)[];
}

export const Gallery = (props: GalleryProps) => {
    const { images } = props;

    const items = images.map((image, index) => {
        return <Image className={styles.galleryImage} key={image} src={image} alt={`gallery-img-${index}`} />;
    });

    const amountPerBreakpoint = {
        xl: 2,
        l: 2,
        m: 2,
        s: 1,
        xs: 1,
    };

    return <Slider items={items} amountPerBreakpoint={amountPerBreakpoint} />;
};
