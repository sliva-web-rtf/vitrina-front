import React from 'react';
import { Typography } from '@mui/material';

import { HStack, VStack } from '../Stack/Stack';

import CheckCircleIcon from '@mui/icons-material/CheckCircle';

export const CheckList = (props: { items: string[] }) => {
    const { items } = props;

    return (
        <VStack spacing={2}>
            {items.map((item, index) => (
                <HStack
                    key={index}
                    sx={{
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '20px 24px',
                        borderRadius: '16px',
                        backgroundColor: '#fff',
                    }}
                >
                    <Typography
                        variant='body1'
                    >
                        {item}
                    </Typography>
                    <CheckCircleIcon sx={{ width: '48px', height: '48px', color: 'var(--primary-color)' }} />
                </HStack>
            ))}
        </VStack>
    );
};
