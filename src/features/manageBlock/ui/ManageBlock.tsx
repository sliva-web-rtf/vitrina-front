import { IconButton, Stack } from '@mui/material';
import { FC } from 'react';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { useDispatch } from 'react-redux';
import { deleteSection, duplicateSection } from '@/entities/constructorProject';

type ManageBlock = {
    isHovered: boolean;
    isDragging: boolean;
    index: number;
};

export const ManageBlock: FC<ManageBlock> = ({ isHovered, isDragging, index }) => {
    const dispatch = useDispatch();

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
                <ContentCopyIcon onClick={() => dispatch(duplicateSection(index))} />
            </IconButton>
            <IconButton>
                <DeleteOutlineIcon onClick={() => dispatch(deleteSection(index))} />
            </IconButton>
        </Stack>
    );
};
