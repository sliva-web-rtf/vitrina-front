'use client';

import styles from './VideoFrame.module.scss';

import { useEffect, useRef, useState } from 'react';
import { Box, CircularProgress, Typography } from '@mui/material';
import classNames from 'classnames';

interface VideoFrameProps {
    url: string;
    name?: string;
    className?: string;
}

export const VideoFrame = ({ url, name = 'YouTube', className }: VideoFrameProps) => {
    const [hasError, setHasError] = useState(false);
    const [hasLoaded, setHasLoaded] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const iframeRef = useRef<HTMLIFrameElement>(null);

    useEffect(() => {
        const timeout = setTimeout(() => {
            if (!hasLoaded) {
                setHasError(true);
                setIsLoading(false);
            }
        }, 5000);

        return () => clearTimeout(timeout);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleIframeLoad = () => {
        setHasLoaded(true);
        setIsLoading(false);
    };

    return (
        <Box className={classNames(styles.videoFrame, className)}>
            {isLoading && (
                <Box className={styles.loadingOverlay}>
                    <CircularProgress />
                </Box>
            )}

            {hasError ? (
                <Box className={styles.errorScreen}>
                    <Typography variant="h3">Не удалось загрузить видео</Typography>
                </Box>
            ) : (
                <iframe
                    ref={iframeRef}
                    src={`https://www.youtube.com/embed/${url}`}
                    title={`${name} video`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    onLoad={handleIframeLoad}
                    className={styles.frame}
                />
            )}
        </Box>
    );
};
