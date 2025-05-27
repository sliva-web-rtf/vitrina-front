import { useEffect, RefObject } from 'react';

export const useFocus = (
    containerRef: RefObject<HTMLElement>,
    setIsFocused: (value: boolean) => void,
    menuBarRef: RefObject<HTMLElement>,
) => {
    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            const target = e.target as HTMLElement;

            if (menuBarRef?.current?.contains(target) || target.classList.contains('MuiMenuItem-root')) {
                return;
            }

            if (containerRef.current?.contains(target)) {
                setIsFocused(true);
            } else {
                setIsFocused(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [containerRef, setIsFocused, menuBarRef]);
};
