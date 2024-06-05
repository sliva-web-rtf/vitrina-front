import { ReactNode, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface ScrollProviderProps {
    children?: ReactNode;
}

export const ScrollProvider = (props: ScrollProviderProps) => {
    const { children } = props;
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return <>{children}</>;
};
