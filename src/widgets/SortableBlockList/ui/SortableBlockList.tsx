import { SortableBlock } from '@/features/sortableBlock';
import { closestCenter, DndContext, PointerSensor, useSensor, useSensors } from '@dnd-kit/core';
import { arrayMove, SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { Box } from '@mui/material';
import { useState } from 'react';

const itemsInit = ['Карточка A', 'Карточка B', 'Карточка C'];

export const SortableBlockList = () => {
    const [items, setItems] = useState<Array<string>>(itemsInit);

    const sensors = useSensors(useSensor(PointerSensor, { activationConstraint: { distance: 5 } }));

    const handleDragEnd = (event: any) => {
        const { active, over } = event;

        if (active.id !== over?.id) {
            setItems((items) => {
                const oldIndex = items.indexOf(active.id);
                const newIndex = items.indexOf(over.id);
                return arrayMove(items, oldIndex, newIndex);
            });
        }
    };

    return (
        <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
            <SortableContext items={items} strategy={verticalListSortingStrategy}>
                <Box sx={{ paddingTop: '30px', width: '1496px', margin: '0 auto' }}>
                    {items.map((item, index) => (
                        <SortableBlock key={index} id={item} />
                    ))}
                </Box>
            </SortableContext>
        </DndContext>
    );
};
