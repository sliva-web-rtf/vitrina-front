'use client';

import { ReactNode } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Dot } from './Dot';
import styles from './Slider.module.scss';

interface SliderProps {
    items: ReactNode[];

    amountPerBreakpoint: {
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
    const { xl, l, m, s, xs } = amountPerBreakpoint;

    const responsive = {
        xl: {
            breakpoint: { max: 1920, min: 1600 },
            items: xl,
            partialVisibilityGutter,
        },
        l: {
            breakpoint: { max: 1600, min: 1200 },
            items: l,
            partialVisibilityGutter,
        },
        m: {
            breakpoint: { max: 1200, min: 768 },
            items: m,
            partialVisibilityGutter,
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
