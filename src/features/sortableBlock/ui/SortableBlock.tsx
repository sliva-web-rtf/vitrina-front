'use client';

import { useSortable } from '@dnd-kit/sortable';
import { FC, ReactNode, useEffect, useState } from 'react';
import { CSS } from '@dnd-kit/utilities';
import { HStack } from '@/shared/ui';
import { ManageBlock } from '@/features/manageBlock';
import { DragHandler } from '@/entities/dragHandler';
import { Stack, Typography } from '@mui/material';

type SortableBlockProps = {
    id: string;
    children: ReactNode;
};

export const SortableBlock: FC<SortableBlockProps> = ({ id, children }) => {
    const { setActivatorNodeRef, attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({
        id,
    });
    const [isHovered, setIsHovered] = useState(false);
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    return (
        <>
            {isClient && (
                <HStack
                    ref={setNodeRef}
                    sx={{
                        position: 'relative',
                        background: '#fff',
                        padding: '32px 64px',
                        borderBottom: '5px dotted #E5E8EC',
                        transform: CSS.Transform.toString(transform),
                        transition,
                        opacity: isDragging ? 0.5 : 1,
                    }}
                    onMouseOver={() => setIsHovered(true)}
                    onMouseOut={() => setIsHovered(false)}
                >
                    <ManageBlock isHovered={isHovered} isDragging={isDragging} sectionId={id} />
                    <DragHandler
                        isHovered={isHovered}
                        setActivatorNodeRef={setActivatorNodeRef}
                        {...listeners}
                        {...attributes}
                    />
                    <Stack sx={{ padding: '20px 0', width: '100%' }}>{children}</Stack>
                </HStack>
            )}
        </>
    );
};
