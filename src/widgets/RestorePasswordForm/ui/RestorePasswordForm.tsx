'use client';

import React, { useState } from 'react';
import { AuthorizationWrapper } from '../../AuthorizationWrapper/ui/AuthorizationWrapper';
import { useForm } from 'react-hook-form';
import { RestorePasswordFormData } from '../model/types/RestorePasswordFormData';
import { getRestorePasswordStep } from '../model/restorePasswordStepsHandler';
import { Box } from '@mui/material';
import { LabellessStepper } from '@/widgets/Stepper';

const STEPS_COUNT = 2;

export const RestorePasswordForm = () => {
    const {
        handleSubmit,
        control,
        formState: { errors },
    } = useForm<RestorePasswordFormData>();

    const [currentStep, setCurrentStep] = useState(0);
    const [formData, setFormData] = useState<RestorePasswordFormData>();

    const onSubmit = (data: RestorePasswordFormData) => {
        setFormData(data);
        setCurrentStep(currentStep + 1);
        alert(`Письмо отправлено на почту ${data.email}`);
    };

    return (
        <AuthorizationWrapper endAdornment={<LabellessStepper currentStep={currentStep} stepsCount={2} />}>
            <Box component="form" onSubmit={handleSubmit(onSubmit)}>
                {getRestorePasswordStep(currentStep, control, errors, formData)}
            </Box>
        </AuthorizationWrapper>
    );
};
