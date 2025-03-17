import { ReactNode, useCallback, useMemo, useState } from 'react';
import { SignUpContext } from '../model';

export const SignUpContextProvider = ({ children, stepsCount }: { children: ReactNode; stepsCount: number }) => {
    const [currentStep, setCurrentStep] = useState<number>(0);

    const changeCurrentStep = useCallback(
        (value: number) => {
            if (value > stepsCount - 1) {
                throw new RangeError('value bigger than possible steps');
            }
            setCurrentStep((prev) => prev + 1);
        },
        [stepsCount],
    );

    const contextValue = useMemo(
        () => ({
            currentStep,
            changeCurrentStep,
        }),
        [currentStep, changeCurrentStep],
    );

    return <SignUpContext.Provider value={contextValue}>{children}</SignUpContext.Provider>;
};
