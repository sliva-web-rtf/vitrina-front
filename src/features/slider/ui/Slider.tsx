'use client';

import { Box } from '@mui/material';
import { memo, ReactNode, useCallback, useEffect, useRef, useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Dot } from './Dot';
import styles from './Slider.module.scss';

interface SliderProps {
    items: ReactNode[];

    itemWidth?: number;
    spacing?: number;
    overflow?: boolean;
}

export const Slider = memo((props: SliderProps) => {
    const ref = useRef<HTMLDivElement | null>(null);
    const { items, itemWidth = 300 } = props;
    const [amountPerSlide, setAmountPerSlide] = useState(3);

    const handle = useCallback(() => {
        if (ref.current) {
            setAmountPerSlide(Math.floor((ref.current.clientWidth + 24) / (itemWidth + 24)));
        }
    }, [itemWidth]);

    useEffect(() => {
        handle();
        window.addEventListener('resize', handle);

        return () => {
            window.removeEventListener('resize', handle);
        };
    }, [handle]);

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: amountPerSlide,
            partialVisibilityGutter: itemWidth * 0.1,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: amountPerSlide,
            partialVisibilityGutter: itemWidth * 0.1,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: amountPerSlide,
            partialVisibilityGutter: itemWidth * 0.1,
        },
    };

    return (
        <Box ref={ref}>
            <Carousel
                autoPlay
                autoPlaySpeed={5000}
                rewind
                rewindWithAnimation
                showDots={items.length > amountPerSlide}
                customDot={<Dot />}
                partialVisible={items.length > amountPerSlide}
                draggable={false}
                responsive={responsive}
                keyBoardControl
                transitionDuration={500}
                containerClass={styles.container}
                dotListClass={styles.dots}
                itemClass={styles.item}
            >
                {items}
            </Carousel>
        </Box>
    );
});

Slider.displayName = 'Slider';
