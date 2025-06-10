'use client';

import { SectionSchema, SectionTypes, setSections } from '@/entities/constructorProject';
import { SortableBlock } from '@/features/sortableBlock';
import { ResizableTextBlock } from '@/shared/ui';
import { closestCenter, DndContext, PointerSensor, useSensor, useSensors } from '@dnd-kit/core';
import { arrayMove, SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { Box } from '@mui/material';
import { useDispatch } from 'react-redux';

export const SortableBlockList = ({ sections }: { sections: SectionSchema[] }) => {
    const sensors = useSensors(useSensor(PointerSensor, { activationConstraint: { distance: 5 } }));
    const dispatch = useDispatch();

    const handleDragEnd = (event: any) => {
        const { active, over } = event;

        if (active.id !== over?.id) {
            const oldIndex = sections.indexOf(active.id);
            const newIndex = sections.indexOf(over.id);
            const newSections = arrayMove(sections, oldIndex, newIndex);
            dispatch(setSections(newSections));
        }
    };

    const renderSection = (section: SectionSchema) => {
        switch (section.type) {
            case SectionTypes.text:
                return <ResizableTextBlock html={section.content} index={sections.indexOf(section)} />;
        }
    };

    return (
        <DndContext id={'dnd-context'} sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
            <SortableContext items={sections.map((section) => section.id)} strategy={verticalListSortingStrategy}>
                <Box sx={{ width: '1496px', margin: '0 auto' }}>
                    {sections.map((section, index) => (
                        <SortableBlock key={index} id={section.id} index={index}>
                            {renderSection(section)}
                        </SortableBlock>
                    ))}
                </Box>
            </SortableContext>
        </DndContext>
    );
};
