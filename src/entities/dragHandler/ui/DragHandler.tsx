import { IconButton } from '@mui/material';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
import { FC } from 'react';

type DragHandlerProps = {
    isHovered: boolean;
    setActivatorNodeRef: (element: HTMLElement | null) => void;
};

export const DragHandler: FC<DragHandlerProps> = ({ isHovered, setActivatorNodeRef, ...args }) => {
    return (
        <IconButton
            ref={setActivatorNodeRef}
            sx={{
                marginRight: '30px',
                justifyContent: 'center',
                margin: 'auto 0',
                opacity: isHovered ? 1 : 0,
                cursor: isHovered ? 'grab' : 'auto',
                position: 'absolute',
                left: 0,
                top: '50%',
                bottom: '50%',
                backgroundColor: 'transparent !important',
            }}
            {...args}
        >
            <DragIndicatorIcon />
        </IconButton>
    );
};
