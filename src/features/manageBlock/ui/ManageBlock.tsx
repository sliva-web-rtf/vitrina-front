import { IconButton, Stack } from '@mui/material';
import { FC } from 'react';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import styles from './ManageBlock.module.scss';

type ManageBlock = {
    isHovered: boolean;
    isDragging: boolean;
};

export const ManageBlock: FC<ManageBlock> = ({ isHovered, isDragging }) => {
    return (
        <Stack
            className={styles.container}
            sx={{
                opacity: isHovered && !isDragging ? 1 : 0,
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
