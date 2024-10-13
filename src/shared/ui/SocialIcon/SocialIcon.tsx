import { Stack } from '@mui/material';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';
import Link from 'next/link';
import styles from './SocialIcon.module.scss';

interface SocialIconProps {
    icon: string | StaticImport;
    url: string;
    alt: string;
}

export const SocialIcon = (props: SocialIconProps) => {
    const { icon, url, alt } = props;

    return (
        <Stack component={Link} href={url} target="_blank" rel="noopener noreferrer" className={styles.container}>
            <Image src={icon} alt={alt} loading="lazy" />
        </Stack>
    );
};
