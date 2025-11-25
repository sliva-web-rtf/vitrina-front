'use client';

import { FC } from 'react';
import { VStack } from '../Stack/Stack';
import Image from 'next/image';
import { Typography } from '@mui/material';
import styles from './ConstructorInstrument.module.scss';
import { ConstructorInstrumentProps } from '@/shared/lib/types/constructor/ability';

export const ConstructorInstrument: FC<ConstructorInstrumentProps> = (props) => {
    const { svgPath, mainInfo, additionInfo } = props;

    return (
        <VStack className={styles.container}>
            <Image src={svgPath} alt={svgPath} style={{ marginBottom: '8px' }} />
            <Typography variant={mainInfo.variant}>{mainInfo.text}</Typography>
            {additionInfo ? <Typography variant={additionInfo.variant}>{additionInfo.text}</Typography> : null}
        </VStack>
    );
};
