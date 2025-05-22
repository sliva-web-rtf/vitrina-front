import { useEffect, RefObject } from 'react';

export const useFocusManagement = (
    ref: RefObject<HTMLElement>,
    setIsFocused: (value: boolean) => void,
    panelRef?: RefObject<HTMLElement>,
) => {
    useEffect(() => {
        const handleClick = (e: MouseEvent) => {
            const target = e.target as Node;

            if (panelRef?.current?.contains(target)) return;

            if (ref.current?.contains(target)) {
                setIsFocused(true);
            } else {
                setIsFocused(false);
            }
        };

        document.addEventListener('mousedown', handleClick);
        return () => document.removeEventListener('mousedown', handleClick);
    }, [ref, panelRef, setIsFocused]);
};
