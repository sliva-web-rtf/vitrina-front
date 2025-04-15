import React from 'react';
import { Step, stepConnectorClasses, Stepper, styled } from '@mui/material';

const StyledStepper = styled(Stepper)(() => ({
    width: '100%',
    justifyContent: 'center',
    gap: '21px',
    [`& .${stepConnectorClasses.line}`]: {
        display: 'none',
    },
}));

const StyledStep = styled(Step)<{ active?: boolean }>(({ active }) => ({
    maxWidth: '92px',
    height: '8px',
    backgroundColor: active ? '#784af4' : '#eaeaf0',
    borderRadius: '100px',
}));

interface LabellessStepperProps {
    currentStep: number;
    stepsCount: number;
}

export const LabellessStepper = (props: LabellessStepperProps) => {
    const { currentStep, stepsCount } = props;

    return (
        <StyledStepper alternativeLabel activeStep={currentStep}>
            {Array.from({ length: stepsCount }).map((_, index) => (
                <StyledStep key={index} active={index === currentStep} />
            ))}
        </StyledStepper>
    );
};
