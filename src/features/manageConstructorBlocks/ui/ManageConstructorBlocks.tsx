import { IconButton, Stack } from '@mui/material';
import { FC } from 'react';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { useDispatch } from 'react-redux';

import { deleteSection, duplicateSection } from '@/entities/constructorProject';

type manageConstructorBlocksProps = {
    isHovered: boolean;
    isDragging: boolean;
    sectionId: string;
};

export const ManageConstructorBlocks: FC<manageConstructorBlocksProps> = ({ isHovered, isDragging, sectionId }) => {
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
                <ContentCopyIcon onClick={() => dispatch(duplicateSection(sectionId))} />
            </IconButton>
            <IconButton>
                <DeleteOutlineIcon onClick={() => dispatch(deleteSection(sectionId))} />
            </IconButton>
        </Stack>
    );
};
