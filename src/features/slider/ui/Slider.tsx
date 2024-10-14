import { HStack } from '@/shared/ui';
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import { Box, IconButton } from '@mui/material';
import { memo, ReactNode, useCallback, useEffect, useRef, useState } from 'react';
import styles from './Slider.module.scss';

interface SliderProps {
    name: string;
    items: ReactNode[];
    itemWidth?: number;

    spacing?: number;
    overflow?: boolean;
}

export const Slider = memo((props: SliderProps) => {
    const ref = useRef<HTMLDivElement | null>(null);
    const { name, items, spacing = 3, overflow = false, itemWidth: a = 300 } = props;
    const [itemWidth, setItemWidth] = useState(a);
    const [index, setIndex] = useState(0);
    const [currentIndex, setCurrentIndex] = useState(0);

    const handle = useCallback(() => {
        if (ref.current) {
            const firstCard = ref.current.children[0] as HTMLElement;
            if (firstCard) {
                const itemWidth = firstCard.offsetWidth;
                setIndex(
                    items.length - Math.floor((ref.current.clientWidth + spacing * 8) / (itemWidth + spacing * 8)),
                );
                setItemWidth(itemWidth);
            }
        }
    }, [spacing, items.length]);

    const scroll = (direction: 'left' | 'right') => {
        ref?.current?.scrollBy({
            left: (direction === 'left' ? -1 : 1) * (itemWidth + spacing * 8),
            behavior: 'smooth',
        });

        if (direction === 'left') {
            setCurrentIndex((prev) => Math.max(prev - 1, 0));
        } else {
            setCurrentIndex((prev) => Math.min(prev + 1, index));
        }
    };

    useEffect(() => {
        handle();
        window.addEventListener('resize', handle);

        return () => {
            window.removeEventListener('resize', handle);
        };
    }, [handle]);

    return (
        <Box className={styles.container}>
            <IconButton
                size="large"
                onClick={() => scroll('left')}
                className={`${styles.button} ${styles.prev}`}
                disabled={currentIndex === 0}
            >
                <ArrowBackRoundedIcon />
            </IconButton>
            <HStack
                ref={ref}
                spacing={spacing}
                className={styles.slider}
                sx={{ overflowX: overflow ? 'visible' : 'hidden' }}
            >
                {items.map((item, index) => (
                    <Box key={`${name}-${index}`}>{item}</Box>
                ))}
            </HStack>
            <IconButton
                size="large"
                onClick={() => scroll('right')}
                className={`${styles.button} ${styles.next}`}
                disabled={currentIndex === index}
            >
                <ArrowForwardRoundedIcon />
            </IconButton>
        </Box>
    );
});

Slider.displayName = 'Slider';
