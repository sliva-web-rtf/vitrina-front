import React from 'react';
import CheckCircleIcon from '@mui/icons-material/CheckCircle'; // MUI icon example
import { Box, Typography } from '@mui/material';
import { HStack, VStack } from '../Stack/Stack';

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
                        sx={(theme) => ({
                            fontSize: '24px',
                            fontWeight: 500,
                            lineHeight: '33px',
                            [theme.breakpoints.down('xl')]: {
                                fontSize: '22px',
                            },
                            [theme.breakpoints.down('sm')]: {
                                fontSize: '16px',
                                lineHeight: '20px',
                            },
                        })}
                    >
                        {item}
                    </Typography>
                    <CheckCircleIcon sx={{ width: '48px', height: '48px', color: 'var(--primary-color)' }} />
                </HStack>
            ))}
        </VStack>
    );
};
