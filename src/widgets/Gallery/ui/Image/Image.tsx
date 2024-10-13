'use client';

import { BaseAvatar } from '@/shared/ui';
import { Box, Fade, Modal } from '@mui/material';
import ImageNext from 'next/image';
import { memo, useCallback, useState } from 'react';
import classNames from './Image.module.scss';

interface ImageProps {
    readonly src: string;
    readonly alt?: string;
    readonly className?: string;
    readonly width?: number;
}

export const Image = memo((props: ImageProps) => {
    const [open, setOpen] = useState(false);
    const { src, alt, className, width } = props;

    const handleToggleModal = useCallback(() => setOpen((prev) => !prev), []);

    if (!src) {
        return (
            <BaseAvatar className={className} src={src} alt={alt ?? 'Картинка проекта'} onClick={handleToggleModal} />
        );
    }

    return (
        <>
            <BaseAvatar className={className} src={src} alt={alt ?? 'Картинка проекта'} onClick={handleToggleModal} />
            <Modal open={open} onClose={handleToggleModal} className={classNames.modal} disableAutoFocus>
                <Fade in={open}>
                    <Box className={classNames.container}>
                        <ImageNext
                            className={classNames.image}
                            src={src}
                            alt={alt ?? 'Картинка проекта'}
                            onClick={handleToggleModal}
                            width={width}
                        />
                    </Box>
                </Fade>
            </Modal>
        </>
    );
});

Image.displayName = 'Image';
