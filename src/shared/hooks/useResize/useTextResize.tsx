import { useCallback, RefObject } from 'react';

import { Position } from '@/shared/lib/types/Position';

export const useResize = (containerRef: RefObject<HTMLElement>) => {
    const handleResize = useCallback(
        (position: Position) => (e: React.MouseEvent) => {
            e.preventDefault();

            const container = containerRef.current;
            if (!container) return;

            const startX = e.clientX;
            const startWidth = container.offsetWidth;

            const parentWidth = container.parentElement?.offsetWidth || 1200;
            const maxWidth = parentWidth * 0.95;
            const minWidth = parentWidth * 0.15;

            const onMouseMove = (moveEvent: MouseEvent) => {
                const deltaX = moveEvent.clientX - startX;
                const newWidth = position === 'left' ? startWidth - deltaX : startWidth + deltaX;

                container.style.width = `${Math.min(Math.max(newWidth, minWidth), maxWidth)}px`;
            };

            const onMouseUp = () => {
                window.removeEventListener('mousemove', onMouseMove);
                window.removeEventListener('mouseup', onMouseUp);
            };

            window.addEventListener('mousemove', onMouseMove);
            window.addEventListener('mouseup', onMouseUp);
        },
        [containerRef],
    );

    return { handleResize };
};
