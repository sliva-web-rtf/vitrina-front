import React from 'react';
import {
    Box,
    Step,
    StepConnector,
    stepConnectorClasses,
    StepIconProps,
    StepLabel,
    Stepper,
    styled,
} from '@mui/material';

const QontoConnector = styled(StepConnector)(({ theme }) => ({
    [`& .${stepConnectorClasses.line}`]: {
        display: 'none',
    },
}));

const QontoStepIconRoot = styled('div')<{ ownerState: { active?: boolean } }>(({ theme }) => ({
    color: '#eaeaf0',
    display: 'flex',
    height: 22,
    alignItems: 'center',
    '& .QontoStepIcon-circle': {
        width: 92,
        height: 8,
        borderRadius: '100px',
        backgroundColor: 'currentColor',
    },
    ...theme.applyStyles('dark', {
        color: theme.palette.grey[700],
    }),
    variants: [
        {
            props: ({ ownerState }) => ownerState.active,
            style: {
                color: '#784af4',
            },
        },
    ],
}));

function QontoStepIcon(props: StepIconProps) {
    const { active, completed, className } = props;

    return (
        <QontoStepIconRoot ownerState={{ active }} className={className}>
            <div className="QontoStepIcon-circle" />
        </QontoStepIconRoot>
    );
}

interface LabellessStepperProps {
    currentStep: number;
    stepsCount: number;
}

export const LabellessStepper = (props: LabellessStepperProps) => {
    const { currentStep, stepsCount } = props;

    return (
        <Box>
            <Stepper alternativeLabel activeStep={currentStep} connector={<QontoConnector />}>
                {Array.from({ length: stepsCount }).map((_, index) => (
                    <Step key={index}>
                        <StepLabel StepIconComponent={QontoStepIcon} />
                    </Step>
                ))}
            </Stepper>
        </Box>
    );
};
