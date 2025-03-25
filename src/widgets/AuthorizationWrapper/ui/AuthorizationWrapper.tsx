import styles from './Authorization.module.scss';

import Image from 'next/image';
import React, { ReactNode } from 'react';
import { Box, Typography } from '@mui/material';

import { AuthorizationBanner } from '@/widgets/Banner';
import { HStack, VStack } from '@/shared/ui';

import logo from '@/shared/assets/logo.svg';

interface AuthorizationWrapperProps {
    children: ReactNode;
    endAdornment?: ReactNode;
}

export const AuthorizationWrapper = (props: AuthorizationWrapperProps) => {
    const { children, endAdornment } = props;

    return (
        <HStack justifyContent="center">
            <VStack className={styles['authorization']}>
                <Box alignSelf={'start'}>
                    <Image src={logo} alt="Проектный практикум" />
                </Box>
                {children}
                {endAdornment || (
                    <Typography variant="subtitle2" color={'var(--mono-caption-color)'} alignSelf={'start'}>
                        by Sliva Group
                    </Typography>
                )}
            </VStack>
            <AuthorizationBanner />
        </HStack>
    );
};
