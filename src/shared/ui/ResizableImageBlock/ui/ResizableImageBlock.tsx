'use client';

import React, { useRef, useState, useEffect } from 'react';

import { useEditor, EditorContent } from '@tiptap/react';
import { Image as ImageTiptap } from '@tiptap/extension-image';
import { StarterKit } from '@tiptap/starter-kit';

import { Box, Button, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

import { Position } from '@/shared/lib/types/Position';

import { ResizeHandle } from '../../ResizeHandle';
import { ImageToolbar } from '../../ImageToolbar';
import { ResizeBorder } from '../../ResizeBorder';

import { useImageManagement } from '../../../hooks/useImageManagement/useImageManagement';
import { useClipboard } from '../../../hooks/useClipboard/useClipboard';
import { useFocusManagement } from '../../../hooks/useFocus/useImageFocus';
import { useResize } from '../../../hooks/useResize/useImageResize';

import styles from './ResizableImageBlock.module.scss';

export const ResizableImageBlock = () => {
    const boxRef = useRef<HTMLDivElement>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);
    const panelRef = useRef<HTMLDivElement>(null);

    const [isFocused, setIsFocused] = useState(false);

    const { imageUrl, imageBlob, handleImageUpload, handleDelete } = useImageManagement(boxRef);
    const { isCopied, copyToClipboard } = useClipboard();
    const { handleResize, handleImageLoad } = useResize(boxRef);
    useFocusManagement(boxRef, setIsFocused, panelRef);

    const editor = useEditor({
        immediatelyRender: false,
        extensions: [StarterKit, ImageTiptap],
        content: imageUrl ? `<img src="${imageUrl}" alt="uploaded image" />` : '',
        editable: false,
    });

    useEffect(() => {
        if (editor && imageUrl) {
            editor.commands.setContent(`<img src="${imageUrl}" alt="uploaded image" />`);
        } else if (editor) {
            editor.commands.setContent('');
        }
    }, [editor, imageUrl]);

    useEffect(() => {
        if (!imageUrl || !boxRef.current) return;

        const img = boxRef.current.querySelector('img');
        if (!img) return;

        if (!img.complete) {
            img.onload = () => handleImageLoad(img);
        } else {
            handleImageLoad(img);
        }
    }, [imageUrl, handleImageLoad]);

    return (
        <Box className={`${styles.container} ${isFocused ? styles.focused : ''}`} ref={boxRef}>
            <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className={styles.hiddenInput}
                ref={fileInputRef}
            />

            {isFocused && (
                <>
                    <ImageToolbar
                        upload={() => fileInputRef.current?.click()}
                        copy={() => copyToClipboard(imageBlob)}
                        delete={handleDelete}
                        isCopied={isCopied}
                        hasImage={!!imageUrl}
                        panelRef={panelRef}
                    />
                    {(['left', 'right', 'bottom', 'top'] as Position[]).map((pos) => (
                        <ResizeBorder key={pos} position={pos} onMouseDown={handleResize(pos)} />
                    ))}
                    {(['top-left', 'top-right', 'bottom-right', 'bottom-left'] as Position[]).map((pos) => (
                        <ResizeHandle key={pos} position={pos} onMouseDown={handleResize(pos)} />
                    ))}
                </>
            )}

            {imageUrl ? (
                <EditorContent editor={editor} />
            ) : (
                <IconButton onClick={() => fileInputRef.current?.click()} className={styles.uploadButton}>
                    <AddIcon />
                </IconButton>
            )}
        </Box>
    );
};
