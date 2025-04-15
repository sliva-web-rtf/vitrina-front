import React from 'react';

import { VStack } from '@/shared/ui';
import { Typography } from '@mui/material';

export const RestorePasswordSendStep = ({ email }: { email: string }) => {
    return (
        <VStack spacing={0.5}>
            <Typography variant="h3">Успех!</Typography>
            <Typography variant="body1" textAlign={'center'} color={'var(--tertiary-color-mono)'}>
                Отправили ссылку на {email}
            </Typography>
        </VStack>
    );
};
