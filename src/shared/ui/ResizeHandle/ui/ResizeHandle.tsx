import styles from './ResizeHandle.module.scss';

import { Position } from '@/shared/lib/types/Position';

import React from 'react';
import { Box } from '@mui/material';

interface ResizeHandleProps {
    position: Position;
    onMouseDown: (e: React.MouseEvent) => void;
}

export const ResizeHandle = ({ position, onMouseDown }: ResizeHandleProps) => {
    const className = `${styles.handle} ${styles[`handle${position}`]}`;

    return <Box onMouseDown={onMouseDown} className={className} />;
};
