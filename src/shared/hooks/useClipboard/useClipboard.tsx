import { useState, useEffect } from 'react';

export const useClipboard = () => {
    const [isCopied, setIsCopied] = useState(false);

    useEffect(() => {
        if (isCopied) {
            const timer = setTimeout(() => setIsCopied(false), 1000);
            return () => clearTimeout(timer);
        }
    }, [isCopied]);

    const copyToClipboard = (imageBase64: string | null) => {
        if (!imageBase64) return;

        navigator.clipboard
            .writeText(imageBase64)
            .then(() => {
                console.log('Image copied to clipboard successfully!');
            })
            .catch((error) => {
                console.error('Failed to copy image to clipboard:', error);
            });
    };

    return { isCopied, copyToClipboard };
};
