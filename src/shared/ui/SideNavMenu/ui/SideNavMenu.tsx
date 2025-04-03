import styles from './SideNavMenu.module.scss';

import React from 'react';
import { VStack } from '../../Stack/Stack';
import { BaseButton } from '../../Button/BaseButton';
import { Typography } from '@mui/material';

type NavButton = {
    label: string;
    href: string;
};

type SideNavMenuProps = {
    buttons: NavButton[];
};

export const SideNavMenu = (props: SideNavMenuProps) => {
    const { buttons } = props;

    return (
        <VStack spacing={0.5} padding={2} className={styles['sideNavMenu']}>
            {buttons.map((btn, index) => (
                <BaseButton key={index} href={btn.href} className={styles['menuButton']}>
                    <Typography color="black" textAlign="start" paddingRight="30px">
                        {btn.label}
                    </Typography>
                </BaseButton>
            ))}
        </VStack>
    );
};
