import styles from './Link.module.scss';

import Link, { LinkProps } from 'next/link';
import React, { ReactNode } from 'react';

type RegularLinkProps = LinkProps & {
    children: ReactNode;
};

export const RegularLink = (props: RegularLinkProps) => {
    const { children } = props;

    return (
        <Link {...props} className={styles['regularLink']}>
            {children}
        </Link>
    );
};
