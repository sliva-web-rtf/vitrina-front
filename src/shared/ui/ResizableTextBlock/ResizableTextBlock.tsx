'use client';

import { useState, useRef } from 'react';

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

export const ResizeTextBlock = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const menuBarRef = useRef<HTMLDivElement>(null);
    const [isFocused, setIsFocused] = useState(false);
    useFocus(containerRef, setIsFocused, menuBarRef);
    const { handleResize } = useResize(containerRef);

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
            FontFamily.configure({
                types: ['textStyle'],
            }),
            FontSize,
            Underline,
        ],
        editorProps: {
            attributes: {
                class: `${styles.editor} `,
            },
        },
        immediatelyRender: false,
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
