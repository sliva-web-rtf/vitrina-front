'use client';

import React, { useContext } from 'react';
import { Typography } from '@mui/material';

import { LabellessStepper } from '@/widgets/Stepper';
import { VStack } from '@/shared/ui';
import { AuthorizationWrapper } from '@/widgets/AuthorizationWrapper';
import { SignUpContext, SignUpContextProvider, SignUpForm } from '@/widgets/SignUpForm';

const SignUpPage = () => {
    return (
        <SignUpContextProvider>
            <SignUpContent />
        </SignUpContextProvider>
    );
};

const SignUpContent = () => {
    const signUpContext = useContext(SignUpContext);

    if (!signUpContext) {
        throw new Error('SignUpContent must be used within a SignUpContextProvider');
    }

    const { currentStep, totalSteps } = signUpContext;

    return (
        <AuthorizationWrapper endAdornment={<LabellessStepper currentStep={currentStep} stepsCount={totalSteps} />}>
            <VStack spacing={4} width={'100%'} maxWidth={'440px'}>
                <Typography variant="h3">Регистрация</Typography>
                <SignUpForm />
            </VStack>
        </AuthorizationWrapper>
    );
};

export default SignUpPage;
