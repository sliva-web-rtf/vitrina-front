import { RefObject, useCallback } from 'react';

import { Position } from '@/shared/lib/types/Position';

import { INITIAL_WIDTH, MIN_WIDTH, MIN_HEIGHT } from '../../lib/const/imageSize';

export const useResize = (boxRef: RefObject<HTMLDivElement>, imgRef: RefObject<HTMLImageElement>) => {
    const handleResize = useCallback(
        (position: Position) => (e: React.MouseEvent) => {
            e.preventDefault();
            const box = boxRef.current;
            if (!box) return;

            const startX = e.clientX;
            const startY = e.clientY;
            const startWidth = box.offsetWidth;
            const startHeight = box.offsetHeight;

            const naturalAspect =
                imgRef.current?.naturalWidth && imgRef.current?.naturalHeight
                    ? imgRef.current.naturalWidth / imgRef.current.naturalHeight
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
                        newHeight = newWidth / naturalAspect;
                        break;
                    case 'top-right':
                    case 'bottom-right':
                    case 'right':
                        newWidth = startWidth + deltaX;
                        newHeight = newWidth / naturalAspect;
                        break;
                    case 'top':
                        newHeight = startHeight - deltaY;
                        newWidth = newHeight * naturalAspect;
                        break;
                    case 'bottom':
                        newHeight = startHeight + deltaY;
                        newWidth = newHeight * naturalAspect;
                        break;
                }

                box.style.width = `${Math.max(newWidth, MIN_WIDTH)}px`;
                box.style.height = `${Math.max(newHeight, MIN_HEIGHT)}px`;
            };

            const onMouseUp = () => {
                window.removeEventListener('mousemove', onMouseMove);
                window.removeEventListener('mouseup', onMouseUp);
            };

            window.addEventListener('mousemove', onMouseMove);
            window.addEventListener('mouseup', onMouseUp);
        },
        [boxRef, imgRef],
    );

    const handleImageLoad = useCallback(
        (e: React.SyntheticEvent<HTMLImageElement>) => {
            if (!boxRef.current) return;
            const img = e.target as HTMLImageElement;
            const aspectRatio = img.naturalWidth / img.naturalHeight;
            boxRef.current.style.width = `${INITIAL_WIDTH}px`;
            boxRef.current.style.height = `${INITIAL_WIDTH / aspectRatio}px`;
        },
        [boxRef],
    );

    return { handleResize, handleImageLoad };
};
