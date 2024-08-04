import { BaseAvatar } from '@/shared/ui';
import { memo, useCallback, useState } from 'react';
import { Box, Modal, Fade } from '@mui/material';
import classNames from './Image.module.scss';

interface ImageProps {
    readonly src: string;
    readonly alt?: string;
    readonly className?: string;
}

export const Image = memo((props: ImageProps) => {
    const [open, setOpen] = useState(false);
    const { src, alt, className } = props;

    const handleToggleModal = useCallback(() => setOpen(prev => !prev), []);

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
                        <img
                            className={classNames.image}
                            src={src}
                            alt={alt ?? 'Картинка проекта'}
                            onClick={handleToggleModal}
                        />
                    </Box>
                </Fade>
            </Modal>
        </>
    );
});
