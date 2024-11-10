import logo from '@/shared/assets/logo.svg';
import { BaseButton, HStack } from '@/shared/ui';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { NavLink } from '../model/navLink';
import styles from './Header.module.scss';

interface HeaderProps {
    nav: NavLink[];
    navButton: NavLink;
}

export const Header = (props: HeaderProps) => {
    const { nav, navButton } = props;

    return (
        <HStack component="header" className={styles.container} alignItems="center" justifyContent="space-between">
            <Link href="/">
                <Image src={logo} alt="Проектный практикум" />
            </Link>

            <HStack component="nav" spacing={4}>
                {nav.map((item, index) => (
                    <Link key={index} href={item.href}>
                        <Typography variant="subtitle1">{item.text}</Typography>
                    </Link>
                ))}
            </HStack>

            <BaseButton className={styles.button} variant="contained" endIcon={<ArrowForwardRoundedIcon />}>
                <Typography variant="subtitle1">{navButton.text}</Typography>
            </BaseButton>
            <IconButton className={styles.burger}>
                <MenuIcon />
            </IconButton>
        </HStack>
    );
};
