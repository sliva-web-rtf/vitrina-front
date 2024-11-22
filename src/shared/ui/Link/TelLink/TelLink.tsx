import { lowercased } from '@/shared/lib/helpers/lowercased';
import Link, { LinkProps } from 'next/link';
import { ReactNode } from 'react';

interface MailtoLinkProps {
    children?: ReactNode;
    tel: string;
}
export const TelLink = (props: MailtoLinkProps & Omit<LinkProps, 'href'>) => {
    const { children, tel, ...linkProps } = props;

    return (
        <Link {...linkProps} href={`tel:${tel}`}>
            {children}
        </Link>
    );
};
