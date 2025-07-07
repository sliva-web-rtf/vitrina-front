import { IconButton } from '@mui/material';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
import { FC } from 'react';
import styles from './DragHandler.module.scss';

type DragHandlerProps = {
    isHovered: boolean;
    setActivatorNodeRef: (element: HTMLElement | null) => void;
};

export const DragHandler: FC<DragHandlerProps> = ({ isHovered, setActivatorNodeRef, ...args }) => {
    return (
        <IconButton
            ref={setActivatorNodeRef}
            className={styles.wrapper}
            sx={{
                opacity: isHovered ? 1 : 0,
                cursor: isHovered ? 'grab' : 'auto',
            }}
            {...args}
        >
            <DragIndicatorIcon />
        </IconButton>
    );
};
