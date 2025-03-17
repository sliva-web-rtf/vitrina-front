'use client';

import React, { useContext } from 'react';
import { Typography } from '@mui/material';

import { LabellessStepper } from '@/widgets/Stepper';
import { VStack } from '@/shared/ui';
import { AuthorizationWrapper } from './AuthorizationWrapper';
import { SignUpForm } from './SignUpForm';
import { SignUpContext } from '../model';
import { SignUpContextProvider } from './SignUpContextProvider';

const STEPS_COUNT = 4;

export const SignUpPage = () => {
    return (
        <SignUpContextProvider stepsCount={STEPS_COUNT}>
            <SignUpContent />
        </SignUpContextProvider>
    );
};

const SignUpContent = () => {
    const signUpContext = useContext(SignUpContext);

    if (!signUpContext) {
        throw new Error('SignUpContent must be used within a SignUpContextProvider');
    }

    const { currentStep } = signUpContext;

    return (
        <AuthorizationWrapper endAdornment={<LabellessStepper currentStep={currentStep} stepsCount={STEPS_COUNT} />}>
            <VStack spacing={4} width={'100%'} maxWidth={'440px'}>
                <Typography variant="h3">Регистрация</Typography>
                <SignUpForm />
            </VStack>
        </AuthorizationWrapper>
    );
};
