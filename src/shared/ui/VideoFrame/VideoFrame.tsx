'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

import brandBg from '@/shared/assets/brand-bg.jpg';
import { Box, Typography } from '@mui/material';

interface VideoFrameProps {
    url: string;
    name?: string;
    className?: string;
}

export const VideoFrame = ({ url, name = 'YouTube', className }: VideoFrameProps) => {
    const [hasError, setHasError] = useState(false);
    const [hasLoaded, setHasLoaded] = useState(false);
    const iframeRef = useRef<HTMLIFrameElement>(null);

    useEffect(() => {
        const timeout = setTimeout(() => {
            if (!hasLoaded) {
                setHasError(true);
            }
        }, 5000);

        return () => clearTimeout(timeout);
    }, [hasLoaded]);

    const handleIframeLoad = () => {
        setHasLoaded(true);
    };

    return (
        <Box
            className={className}
            style={{
                position: 'relative',
                width: '100%',
                aspectRatio: '16 / 9',
                borderRadius: 'var(--space-xl)',
                overflow: 'hidden',
                backgroundColor: '#000',
            }}
        >
            {hasError ? (
                <Box>
                    <Image
                        src={brandBg}
                        alt={`${name} thumbnail`}
                        fill
                        style={{ objectFit: 'cover' }}
                        sizes="(max-width: 768px) 100vw, 700px"
                    />
                    <Box
                        sx={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            backgroundColor: 'rgba(0,0,0,0.4)',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            color: '#fff',
                            fontSize: '1.2rem',
                            fontWeight: 'bold',
                            padding: '1rem',
                            textAlign: 'center',
                        }}
                    >
                        <Typography variant="h3">Не удалось загрузить видео</Typography>
                    </Box>
                </Box>
            ) : (
                <iframe
                    ref={iframeRef}
                    src={`https://www.youtube.com/embed/${url}`}
                    title={`${name} video`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    onLoad={handleIframeLoad}
                    style={{ width: '100%', height: '100%', border: 'none' }}
                />
            )}
        </Box>
    );
};
