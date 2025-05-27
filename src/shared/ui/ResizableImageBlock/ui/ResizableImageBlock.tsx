'use client';

import React, { useRef, useState } from 'react';

import { Box, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import Image from 'next/image';

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
    const imgRef = useRef<HTMLImageElement>(null);

    const [isFocused, setIsFocused] = useState(false);

    const { imageUrl, imageBlob, handleImageUpload, handleDelete } = useImageManagement();
    const { isCopied, copyToClipboard } = useClipboard();
    const { handleResize, handleImageLoad } = useResize(boxRef, imgRef);
    useFocusManagement(boxRef, setIsFocused, panelRef);

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
                        Upload={() => fileInputRef.current?.click()}
                        Copy={() => copyToClipboard(imageBlob)}
                        Delete={handleDelete}
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
                <Image
                    src={imageUrl}
                    alt="editable content"
                    width={0}
                    height={0}
                    sizes="100vw"
                    onLoad={handleImageLoad}
                    ref={imgRef}
                    className={styles.image}
                />
            ) : (
                <IconButton onClick={() => fileInputRef.current?.click()} className={styles.uploadButton}>
                    <AddIcon />
                </IconButton>
            )}
        </Box>
    );
};
