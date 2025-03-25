import { ReactNode, useCallback, useMemo, useState } from 'react';
import { SignUpContext } from '../model/contexts/signUpContext';

const STEPS_COUNT = 4;

export const SignUpContextProvider = ({ children }: { children: ReactNode }) => {
    const [currentStep, setCurrentStep] = useState<number>(0);

    const changeCurrentStep = useCallback((value: number) => {
        if (value > STEPS_COUNT - 1) {
            throw new RangeError('value bigger than possible steps');
        }
        setCurrentStep((prev) => prev + 1);
    }, []);

    const contextValue = useMemo(
        () => ({
            currentStep,
            totalSteps: STEPS_COUNT,
            changeCurrentStep,
        }),
        [currentStep, changeCurrentStep],
    );

    return <SignUpContext.Provider value={contextValue}>{children}</SignUpContext.Provider>;
};
