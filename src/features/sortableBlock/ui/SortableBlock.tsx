import { useSortable } from '@dnd-kit/sortable';
import { FC, useState } from 'react';
import { CSS } from '@dnd-kit/utilities';
import { HStack } from '@/shared/ui';
import { ManageBlock } from '@/features/manageBlock';
import { DragHandler } from '@/features/dragHandler';
import { Stack, Typography } from '@mui/material';
import styles from './SortableBlock.module.scss';

type SortableBlockProps = {
    id: string;
};

export const SortableBlock: FC<SortableBlockProps> = ({ id }) => {
    const { setActivatorNodeRef, attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({
        id,
    });
    const [isHovered, setIsHovered] = useState(false);

    return (
        <>
            <HStack
                ref={setNodeRef}
                className={styles.container}
                sx={{
                    transform: CSS.Transform.toString(transform),
                    transition,
                    opacity: isDragging ? 0.5 : 1,
                }}
                onMouseOver={() => setIsHovered(true)}
                onMouseOut={() => setIsHovered(false)}
            >
                <ManageBlock isHovered={isHovered} isDragging={isDragging} />
                <DragHandler
                    isHovered={isHovered}
                    setActivatorNodeRef={setActivatorNodeRef}
                    {...listeners}
                    {...attributes}
                />
                <Stack sx={{ padding: '20px 0', background: '#E6F7FF', width: '100%' }}>
                    <Typography sx={{ textAlign: 'center' }}>{id}</Typography>
                </Stack>
            </HStack>
        </>
    );
};
