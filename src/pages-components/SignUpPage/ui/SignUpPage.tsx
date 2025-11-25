'use client';

import React, { useContext, useEffect } from 'react';
import { Typography } from '@mui/material';
import { useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';

import { LabellessStepper } from '@/widgets/Stepper';
import { VStack } from '@/shared/ui';
import { AuthorizationWrapper } from '@/widgets/AuthorizationWrapper';
import { SignUpContext, SignUpContextProvider, SignUpForm } from '@/widgets/SignUpForm';
import { getIsAuthorized } from '@/entities/user';

const SignUpPage = () => {
    const isAuthorized = useSelector(getIsAuthorized);
    const router = useRouter();

    useEffect(() => {
        if (isAuthorized) router.push('/');
    }, [isAuthorized, router]);

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
