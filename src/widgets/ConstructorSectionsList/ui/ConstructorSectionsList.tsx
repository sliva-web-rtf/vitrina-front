'use client';

import { SectionSchema, SectionTypes, setSections } from '@/entities/constructorProject';
import { ConstructorSortableBlock } from '@/features/constructorSortableBlock';
import { ResizableImageBlock, ResizableTextBlock } from '@/shared/ui';
import { closestCenter, DndContext, PointerSensor, useSensor, useSensors } from '@dnd-kit/core';
import { arrayMove, SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { Box } from '@mui/material';
import { useDispatch } from 'react-redux';

export const ConstructorSectionsList = ({ sections }: { sections: SectionSchema[] }) => {
    const sensors = useSensors(useSensor(PointerSensor, { activationConstraint: { distance: 5 } }));
    const dispatch = useDispatch();

    const handleDragEnd = (event: any) => {
        const { active, over } = event;

        if (active.id !== over?.id) {
            const oldIndex = sections.findIndex((s) => s.id === active.id);
            const newIndex = sections.findIndex((s) => s.id === over.id);
            const newSections = arrayMove(sections, oldIndex, newIndex);
            dispatch(setSections(newSections));
        }
    };

    const renderSection = (section: SectionSchema) => {
        switch (section.type) {
            case SectionTypes.text:
                return <ResizableTextBlock html={section.content} id={section.id} />;
            case SectionTypes.image:
                return <ResizableImageBlock html={section.content} id={section.id} />;
        }
    };

    return (
        <DndContext id={'dnd-context'} sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
            <SortableContext items={sections.map((section) => section.id)} strategy={verticalListSortingStrategy}>
                <Box sx={{ width: '1496px', margin: '0 auto' }}>
                    {sections.map((section) => (
                        <ConstructorSortableBlock key={section.id} id={section.id}>
                            {renderSection(section)}
                        </ConstructorSortableBlock>
                    ))}
                </Box>
            </SortableContext>
        </DndContext>
    );
};
