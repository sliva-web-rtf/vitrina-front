import { createContext } from 'react';

interface SignUpContextType {
    currentStep: number;
    totalSteps: number;
    changeCurrentStep: (value: number) => void;
}

export const SignUpContext = createContext<SignUpContextType | undefined>(undefined);
