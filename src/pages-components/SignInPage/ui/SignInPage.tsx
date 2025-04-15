import React from 'react';
import { Typography } from '@mui/material';

import { VStack } from '@/shared/ui';
import { SignInForm } from '@/widgets/SignInForm/ui/SignInForm';
import { AuthorizationWrapper } from '../../../widgets/AuthorizationWrapper/ui/AuthorizationWrapper';

const SignInPage = () => {
    return (
        <AuthorizationWrapper>
            <VStack spacing={4} width={'100%'} maxWidth={'440px'}>
                <Typography variant="h3">Авторизация</Typography>
                <SignInForm />
            </VStack>
        </AuthorizationWrapper>
    );
};

export default SignInPage;
