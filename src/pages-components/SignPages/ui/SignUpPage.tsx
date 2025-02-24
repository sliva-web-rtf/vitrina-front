'use client';

import React, { useState } from 'react';
import { Typography } from '@mui/material';

import { LabellessStepper } from '@/widgets/Stepper';
import { VStack } from '@/shared/ui';
import { AuthorizationWrapper } from './AuthorizationWrapper';
import { SignUpForm } from './SignUpForm';
import { SignUpContext } from '../model';

const STEPS_COUNT = 4;

export const SignUpPage = () => {
    const [currentStep, setCurrentStep] = useState<number>(0);

    const changeCurrentStep = (value: number) => {
        if (value > STEPS_COUNT - 1) {
            throw new RangeError('value bigger than possible steps');
        }
        setCurrentStep(currentStep + 1);
    };

    return (
        <SignUpContext.Provider value={{ currentStep: currentStep, changeCurrentStep: changeCurrentStep }}>
            <AuthorizationWrapper
                endAdornment={<LabellessStepper currentStep={currentStep} stepsCount={STEPS_COUNT} />}
            >
                <VStack spacing={4} width={'100%'} maxWidth={'440px'}>
                    <Typography variant="h3">Регистрация</Typography>
                    <SignUpForm />
                </VStack>
            </AuthorizationWrapper>
        </SignUpContext.Provider>
    );
};
