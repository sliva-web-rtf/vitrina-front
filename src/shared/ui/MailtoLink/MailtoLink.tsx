import { lowercased } from '@/shared/lib/helpers/lowercased';
import Link, { LinkProps } from 'next/link';
import { ReactNode } from 'react';

interface MailtoLinkProps {
    children?: ReactNode;
    email: string;
}
export const MailtoLink = (props: MailtoLinkProps & Omit<LinkProps, 'href'>) => {
    const { children, email, ...linkProps } = props;
    const lowercasedEmail = lowercased(email);

    return (
        <Link {...linkProps} href={`mailto:${lowercasedEmail}`}>
            {children}
        </Link>
    );
};
