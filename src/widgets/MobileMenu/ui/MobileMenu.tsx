'use client';

import { VStack } from '@/shared/ui';
import { NavLink } from '@/widgets/Header/model/navLink';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import { Box, IconButton, Link, Modal, Typography } from '@mui/material';
import { useState } from 'react';
import styles from './MobileMenu.module.scss';

interface MobileMenuProps {
    className: string;
    nav: NavLink[];
}

export const MobileMenu = (props: MobileMenuProps) => {
    const { className, nav } = props;
    const [open, setOpen] = useState(false);

    const toggle = () => {
        setOpen((prev) => !prev);
    };

    const handleLinkClick = (e: any) => {
        setOpen(false);
    };

    return (
        <Box className={className}>
            <IconButton className={styles.burger} onClick={toggle}>
                {open ? <CloseIcon /> : <MenuIcon />}
            </IconButton>
            <Modal open={open}>
                <Box className={styles.modal}>
                    <VStack component="nav" spacing={3}>
                        {nav.map((item, index) => (
                            <Link
                                key={index}
                                href={item.href}
                                sx={{ textDecoration: 'none', color: 'inherit' }}
                                onClick={handleLinkClick}
                            >
                                <Typography variant="h2">{item.text}</Typography>
                            </Link>
                        ))}
                    </VStack>
                </Box>
            </Modal>
        </Box>
    );
};
