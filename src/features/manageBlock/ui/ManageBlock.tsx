import { IconButton, Stack } from '@mui/material';
import { FC } from 'react';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

type ManageBlock = {
    isHovered: boolean;
    isDragging: boolean;
};

export const ManageBlock: FC<ManageBlock> = ({ isHovered, isDragging }) => {
    return (
        <Stack
            sx={{
                position: 'absolute',
                opacity: isHovered && !isDragging ? 1 : 0,
                left: -40,
                top: '25%',
                bottom: '25%',
            }}
        >
            <IconButton>
                <ContentCopyIcon />
            </IconButton>
            <IconButton>
                <DeleteOutlineIcon />
            </IconButton>
        </Stack>
    );
};
