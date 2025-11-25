'use client';
import React, { useRef, useState, useEffect } from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import { Image as ImageTiptap } from '@tiptap/extension-image';
import { StarterKit } from '@tiptap/starter-kit';
import { Box, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { Position } from '@/shared/lib/types/Position';
import { ResizeHandle } from '../../ResizeHandle';
import { ImageToolbar } from '../../ImageToolbar';
import { ResizeBorder } from '../../ResizeBorder';
import styles from './ResizableImageBlock.module.scss';
import { useDispatch } from 'react-redux';
import { SectionTypes, setSection } from '@/entities/constructorProject';
import { useResize } from '../../../hooks/useResize/useImageResize';
import { useClipboard } from '../../../hooks/useClipboard/useClipboard';

const openIndexedDB = () => {
    return new Promise<IDBDatabase>((resolve, reject) => {
        const request = indexedDB.open('ImageDB', 1);
        request.onupgradeneeded = (event) => {
            const db = (event.target as IDBOpenDBRequest).result;
            db.createObjectStore('images');
        };
        request.onsuccess = (event) => {
            resolve((event.target as IDBOpenDBRequest).result);
        };
        request.onerror = (event) => {
            reject((event.target as IDBOpenDBRequest).error);
        };
    });
};

const saveImageToIndexedDB = async (key: string, file: File) => {
    const db = await openIndexedDB();
    const transaction = db.transaction('images', 'readwrite');
    const store = transaction.objectStore('images');
    store.put(file, key);
};

const loadImageFromIndexedDB = async (key: string): Promise<string | null> => {
    const db = await openIndexedDB();
    const transaction = db.transaction('images', 'readonly');
    const store = transaction.objectStore('images');
    const request = store.get(key);

    return new Promise((resolve) => {
        request.onsuccess = () => {
            const blob = request.result;
            if (blob) {
                const blobUrl = URL.createObjectURL(blob);
                resolve(blobUrl);
            } else {
                resolve(null);
            }
        };
        request.onerror = () => {
            resolve(null);
        };
    });
};

export const ResizableImageBlock = ({ html, id }: { html: string; id: string }) => {
    const dispatch = useDispatch();
    const boxRef = useRef<HTMLDivElement>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);
    const panelRef = useRef<HTMLDivElement>(null);
    const [isFocused, setIsFocused] = useState(false);
    const [imageBlobUrl, setImageBlobUrl] = useState<string | null>(null);
    const { handleResize, handleImageLoad } = useResize(boxRef);
    const { isCopied, copyToClipboard } = useClipboard();

    const editor = useEditor({
        extensions: [StarterKit, ImageTiptap],
        content: imageBlobUrl ? `<img src="${imageBlobUrl}" alt="uploaded image" />` : html || '',
        editable: false,
        immediatelyRender: false,
    });

    const handleImageUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            await saveImageToIndexedDB(id, file); // Сохраняем изображение в IndexedDB
            const blobUrl = URL.createObjectURL(file);
            setImageBlobUrl(blobUrl); // Устанавливаем Blob URL для отображения
        }
    };

    const handleDeleteImage = async () => {
        const db = await openIndexedDB();
        const transaction = db.transaction('images', 'readwrite');
        const store = transaction.objectStore('images');
        store.delete(id); // Удаляем изображение из IndexedDB
        setImageBlobUrl(null); // Очищаем состояние
    };

    useEffect(() => {
        const loadImage = async () => {
            const blobUrl = await loadImageFromIndexedDB(id);
            setImageBlobUrl(blobUrl);
        };
        loadImage();
    }, [id]);

    useEffect(() => {
        if (editor) {
            const content = imageBlobUrl ? `<img src="${imageBlobUrl}" />` : html || '';
            editor.commands.setContent(content);
            dispatch(setSection({ section: { id, type: SectionTypes.image, content } }));
        }
    }, [editor, imageBlobUrl, html, id, dispatch]);

    useEffect(() => {
        if (!imageBlobUrl || !boxRef.current) return;

        const img = boxRef.current.querySelector('img');
        if (!img) return;

        if (!img.complete) {
            img.onload = () => handleImageLoad(img);
        } else {
            handleImageLoad(img);
        }
    }, [imageBlobUrl, handleImageLoad]);

    return (
        <Box
            className={`${styles.container} ${isFocused ? styles.focused : ''}`}
            ref={boxRef}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
        >
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
                        uploadFunc={() => fileInputRef.current?.click()}
                        copyFunc={() => copyToClipboard(imageBlobUrl)}
                        deleteFunc={handleDeleteImage}
                        isCopied={isCopied}
                        hasImage={!!imageBlobUrl}
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
            {imageBlobUrl ? (
                <EditorContent editor={editor} />
            ) : (
                <IconButton onClick={() => fileInputRef.current?.click()} className={styles.uploadButton}>
                    <AddIcon />
                </IconButton>
            )}
        </Box>
    );
};
