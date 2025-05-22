import { useState, useEffect } from 'react';

export const useClipboard = () => {
    const [isCopied, setIsCopied] = useState(false);

    useEffect(() => {
        if (isCopied) {
            const timer = setTimeout(() => setIsCopied(false), 1000);
            return () => clearTimeout(timer);
        }
    }, [isCopied]);

    const copyToClipboard = async (blob: Blob | null) => {
        if (!blob) return;

        try {
            if (!navigator.clipboard?.write) {
                throw new Error('Clipboard API not supported');
            }

            const copyBlob = new Blob([blob], { type: blob.type });
            await navigator.clipboard.write([new ClipboardItem({ [copyBlob.type]: copyBlob })]);
            setIsCopied(true);
        } catch (err) {
            console.error('Copy failed:', err);
        }
    };

    return { isCopied, copyToClipboard };
};
