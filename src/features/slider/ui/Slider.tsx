'use client';

import { ReactNode } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Dot } from './Dot';
import styles from './Slider.module.scss';

interface SliderProps {
    items: ReactNode[];

    amountPerSlide?: number;
    partialVisibilityGutter?: number;
}

export const Slider = (props: SliderProps) => {
    const { items, amountPerSlide = 2, partialVisibilityGutter = 32 } = props;

    const responsive = {
        desktop: {
            breakpoint: { max: 1920, min: 1024 },
            items: amountPerSlide,
            partialVisibilityGutter,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 3,
            partialVisibilityGutter,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            partialVisibilityGutter,
        },
    };

    return (
        <Carousel
            autoPlay
            autoPlaySpeed={5000}
            rewind
            rewindWithAnimation
            showDots
            customDot={<Dot />}
            partialVisible
            draggable={false}
            responsive={responsive}
            containerClass={styles.container}
            dotListClass={styles.dots}
            itemClass={styles.item}
        >
            {items}
        </Carousel>
    );
};

Slider.displayName = 'Slider';
