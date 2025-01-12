'use client';

import defaultImage from '@/shared/assets/default-image.png';
import { BaseAvatar } from '@/shared/ui';
import { Box, Fade, Modal } from '@mui/material';
import ImageNext from 'next/image';
import { memo, useCallback, useState } from 'react';
import classNames from './Image.module.scss';
import { useCheckImageQuery } from './api';

interface ImageProps {
    readonly src: string;
    readonly alt?: string;
    readonly className?: string;
    readonly width?: number;
}

export const Image = memo((props: ImageProps) => {
    const [open, setOpen] = useState(false);
    const { src, alt, className } = props;
    const { error } = useCheckImageQuery(src, { skip: !src });

    const handleToggleModal = useCallback(() => setOpen((prev) => !prev), []);

    if (!src || error) {
        return (
            <ImageNext
                className={className}
                src={defaultImage}
                alt={alt ?? 'Картинка проекта'}
                loading="lazy"
                style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 'var(--space-m)' }}
            />
        );
    }

    return (
        <>
            <BaseAvatar className={className} src={src} alt={alt ?? 'Картинка проекта'} onClick={handleToggleModal} />
            <Modal open={open} onClose={handleToggleModal} className={classNames.modal} disableAutoFocus>
                <Fade in={open}>
                    <Box className={classNames.container}>
                        <Box className={classNames.image}>
                            <ImageNext
                                src={src}
                                alt={alt ?? 'Картинка проекта'}
                                onClick={handleToggleModal}
                                fill={true}
                            />
                        </Box>
                    </Box>
                </Fade>
            </Modal>
        </>
    );
});

Image.displayName = 'Image';
