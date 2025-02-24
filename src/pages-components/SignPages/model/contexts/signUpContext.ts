import { createContext } from 'react';

interface SignUpContextType {
    currentStep: number;
    changeCurrentStep: (value: number) => void;
}

export const SignUpContext = createContext<SignUpContextType | undefined>(undefined);
