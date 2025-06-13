import { RefObject, useCallback } from 'react';

import { Position } from '@/shared/lib/types/Position';

import { INITIAL_WIDTH, MIN_WIDTH, MAX_WIDTH } from '../../lib/const/imageSize';

export const useResize = (boxRef: RefObject<HTMLDivElement>) => {
    const handleResize = useCallback(
        (position: Position) => (e: React.MouseEvent) => {
            e.preventDefault();
            const box = boxRef.current;
            if (!box) return;

            const startX = e.clientX;
            const startY = e.clientY;
            const startWidth = box.offsetWidth;
            const startHeight = box.offsetHeight;

            const img = box.querySelector('img');
            const aspectRatio =
                img?.naturalWidth && img?.naturalHeight
                    ? img.naturalWidth / img.naturalHeight
                    : startWidth / startHeight;

            const onMouseMove = (moveEvent: MouseEvent) => {
                const deltaX = moveEvent.clientX - startX;
                const deltaY = moveEvent.clientY - startY;

                let newWidth = startWidth;
                let newHeight = startHeight;

                switch (position) {
                    case 'top-left':
                    case 'bottom-left':
                    case 'left':
                        newWidth = startWidth - deltaX;
                        newHeight = newWidth / aspectRatio;
                        break;
                    case 'top-right':
                    case 'bottom-right':
                    case 'right':
                        newWidth = startWidth + deltaX;
                        newHeight = newWidth / aspectRatio;
                        break;
                    case 'top':
                        newHeight = startHeight - deltaY;
                        newWidth = newHeight * aspectRatio;
                        break;
                    case 'bottom':
                        newHeight = startHeight + deltaY;
                        newWidth = newHeight * aspectRatio;
                        break;
                }

                const minHeight = MIN_WIDTH / aspectRatio;
                const maxHeight = MAX_WIDTH / aspectRatio;
                box.style.width = `${Math.min(Math.max(newWidth, MIN_WIDTH), MAX_WIDTH)}px`;
                box.style.height = `${Math.min(Math.max(newHeight, minHeight), maxHeight)}px`;
            };

            const onMouseUp = () => {
                window.removeEventListener('mousemove', onMouseMove);
                window.removeEventListener('mouseup', onMouseUp);
            };

            window.addEventListener('mousemove', onMouseMove);
            window.addEventListener('mouseup', onMouseUp);
        },
        [boxRef],
    );

    const handleImageLoad = useCallback(
        (img: HTMLImageElement) => {
            const box = boxRef.current;
            if (!box || !img) return;

            const aspectRatio = img.naturalWidth / img.naturalHeight;
            box.style.width = `${INITIAL_WIDTH}px`;
            box.style.height = `${INITIAL_WIDTH / aspectRatio}px`;
        },
        [boxRef],
    );

    return { handleResize, handleImageLoad };
};
