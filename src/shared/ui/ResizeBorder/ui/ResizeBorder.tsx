import React from 'react';

import { Position } from '@/shared/lib/types/Position';

import styles from './ResizeBorder.module.scss';

interface ResizeBorderProps {
    position: Position;
    onMouseDown: React.MouseEventHandler;
}

export const ResizeBorder = ({ position, onMouseDown }: ResizeBorderProps) => (
    <div className={`${styles.resizeBorder} ${styles[`resizeBorder${position}`]}`} onMouseDown={onMouseDown} />
);
