import React from 'react';

import { Box, IconButton } from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckIcon from '@mui/icons-material/Check';

import MuiUploadIcon from '../../../assets/Icons/MuiUploadIcon';

import styles from './ImageToolbar.module.scss';

interface ImageToolbarProps {
    uploadFunc: (e: React.MouseEvent) => void;
    copyFunc: (e: React.MouseEvent) => void;
    deleteFunc: (e: React.MouseEvent) => void;
    isCopied: boolean;
    hasImage: boolean;
    panelRef: React.RefObject<HTMLDivElement>;
}

export const ImageToolbar = ({ uploadFunc, copyFunc, deleteFunc, isCopied, hasImage, panelRef }: ImageToolbarProps) => (
    <Box ref={panelRef} className={styles.toolbar}>
        <IconButton onClick={uploadFunc}>
            <MuiUploadIcon />
        </IconButton>
        <IconButton onClick={copyFunc} disabled={!hasImage} className={styles.copyButton}>
            {isCopied ? <CheckIcon /> : <ContentCopyIcon />}
        </IconButton>
        <IconButton onClick={deleteFunc} disabled={!hasImage}>
            <DeleteIcon />
        </IconButton>
    </Box>
);
