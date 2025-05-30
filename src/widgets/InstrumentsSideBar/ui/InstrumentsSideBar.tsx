'use client';

import styles from './InstrumentsSideBar.module.scss';

import { HStack, VStack } from '@/shared/ui';
import React from 'react';
import { SideBarBlock } from '../model/types/SideBarBlock';
import { Typography } from '@mui/material';

export const InstrumentsSideBar = ({ blocks }: { blocks: SideBarBlock[] }) => {
    return (
        <VStack spacing={3} className={styles['sideBar']}>
            {blocks.map((block, index) => (
                <VStack key={index} spacing={0.5} className={styles['block']}>
                    <Typography variant="subtitle2" className={styles['blockHeader']}>
                        {block.name}
                    </Typography>
                    {block.actions.map((action, index) => (
                        <HStack key={index} spacing={1.5} onClick={action.action} className={styles['blockAction']}>
                            {action.icon}
                            <Typography variant="subtitle2">{action.name}</Typography>
                        </HStack>
                    ))}
                </VStack>
            ))}
        </VStack>
    );
};
