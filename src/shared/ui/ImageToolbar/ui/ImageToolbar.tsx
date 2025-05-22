import React from 'react';

import { Box, IconButton } from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckIcon from '@mui/icons-material/Check';

import UploadIcon from '../../UploadIcon/UploadIcon';

import styles from './ImageToolbar.module.scss';

interface ImageToolbarProps {
    Upload: (e: React.MouseEvent) => void;
    Copy: (e: React.MouseEvent) => void;
    Delete: (e: React.MouseEvent) => void;
    isCopied: boolean;
    hasImage: boolean;
    panelRef: React.RefObject<HTMLDivElement>;
}

export const ImageToolbar = ({ Upload, Copy, Delete, isCopied, hasImage, panelRef }: ImageToolbarProps) => (
    <Box ref={panelRef} className={styles.toolbar}>
        <IconButton onClick={Upload}>
            <UploadIcon />
        </IconButton>
        <IconButton onClick={Copy} disabled={!hasImage} className={styles.copyButton}>
            {isCopied ? <CheckIcon /> : <ContentCopyIcon />}
        </IconButton>
        <IconButton onClick={Delete} disabled={!hasImage}>
            <DeleteIcon />
        </IconButton>
    </Box>
);
