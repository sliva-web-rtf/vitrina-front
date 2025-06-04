'use client';

import { useState, useRef, useEffect } from 'react';

import { EditorContent, useEditor } from '@tiptap/react';
import { StarterKit } from '@tiptap/starter-kit';
import Highlight from '@tiptap/extension-highlight';
import TextAlign from '@tiptap/extension-text-align';
import TextStyle from '@tiptap/extension-text-style';
import FontFamily from '@tiptap/extension-font-family';
import Underline from '@tiptap/extension-underline';
import Placeholder from '@tiptap/extension-placeholder';
import { Box } from '@mui/material';

import { TextToolBar } from '../TextToolBar';
import { ResizeHandle } from '../ResizeHandle/index';

import { useFocus } from '../../hooks/useFocus/useTextFocus';
import { useResize } from '../../hooks/useResize/useTextResize';

import { FontSize } from '../TextToolBar/ui/Select/FontSizeSelect/module/setFontSize';

import styles from './ResizableTextBlock.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { SectionTypes, setSection } from '@/entities/constructorProject';

export const ResizableTextBlock = ({ html, index }: { html: string; index: number }) => {
    const dispatch = useDispatch();
    const containerRef = useRef<HTMLDivElement>(null);
    const menuBarRef = useRef<HTMLDivElement>(null);
    const [isFocused, setIsFocused] = useState(false);
    useFocus(containerRef, setIsFocused, menuBarRef);
    const { handleResize } = useResize(containerRef);
    const isInitialized = useRef(false);

    const editor = useEditor({
        extensions: [
            Placeholder.configure({
                placeholder: 'Нажмите, чтобы изменить текст',
            }),
            StarterKit,
            Highlight,
            TextAlign.configure({
                types: ['heading', 'paragraph'],
            }),
            TextStyle,
            FontSize,
            FontFamily.configure({
                types: ['textStyle'],
            }),
            Underline,
        ],
        editorProps: {
            attributes: {
                class: `${styles.editor} `,
            },
        },
        immediatelyRender: false,
        onCreate: ({ editor }) => {
            if (html && !isInitialized.current) {
                editor.commands.setContent(html, false);
                isInitialized.current = true;
            }
        },
        onUpdate: ({ editor }) => {
            const content = editor.getHTML();
            dispatch(setSection({ section: { type: SectionTypes.text, content }, index }));
        },
    });

    return (
        <Box ref={containerRef} className={`${styles.editorContainer} ${isFocused ? styles.focused : ''}`}>
            {isFocused && (
                <>
                    <TextToolBar editor={editor} ref={menuBarRef} />
                    <ResizeHandle position="left" onMouseDown={handleResize('left')} />
                    <ResizeHandle position="right" onMouseDown={handleResize('right')} />
                </>
            )}

            <EditorContent editor={editor} />
        </Box>
    );
};
