'use client';

import { ReactNode } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Dot } from './Dot';
import styles from './Slider.module.scss';

interface SliderProps {
    items: ReactNode[];

    amountPerBreakpoint: {
        xxl: number;
        xl: number;
        l: number;
        m: number;
        s: number;
        xs: number;
    };
    partialVisibilityGutter?: number;
}

export const Slider = (props: SliderProps) => {
    const { items, amountPerBreakpoint, partialVisibilityGutter = 32 } = props;
    const { xxl, xl, l, m, s, xs } = amountPerBreakpoint;

    const responsive = {
        xxl: {
            breakpoint: { max: 3000, min: 1920 },
            items: xxl,
            partialVisibilityGutter: 0,
        },
        xl: {
            breakpoint: { max: 1920, min: 1600 },
            items: xl,
            partialVisibilityGutter: 0,
        },
        l: {
            breakpoint: { max: 1600, min: 1200 },
            items: l,
            partialVisibilityGutter: 0,
        },
        m: {
            breakpoint: { max: 1200, min: 768 },
            items: m,
            partialVisibilityGutter: 0,
        },
        s: {
            breakpoint: { max: 768, min: 480 },
            items: s,
            partialVisibilityGutter: 0,
        },
        xs: {
            breakpoint: { max: 480, min: 0 },
            items: xs,
            partialVisibilityGutter: 0,
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
            // partialVisible
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
