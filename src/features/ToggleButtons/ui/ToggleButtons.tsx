'use client';

import { filterActions, getFilter } from '@/features/filter';
import { useAppDispatch } from '@/shared/hooks/useAppDispatch/useAppDispatch';
import { BaseToggleButton, BaseToggleButtonGroup } from '@/shared/ui';
import { memo } from 'react';
import { useSelector } from 'react-redux';
import { ToggleOption, ToggleOptionKeys } from '../model/types/toggleOption';

const { setType } = filterActions;

export const ToggleButtons = memo(() => {
    const dispatch = useAppDispatch();
    const { type } = useSelector(getFilter);

    const handleChange = (_: unknown, newValue: ToggleOption) => {
        dispatch(setType(newValue));
    };

    return (
        <BaseToggleButtonGroup exclusive value={type} onChange={handleChange}>
            {Object.keys(ToggleOptionKeys).map((key) => (
                <BaseToggleButton key={key} value={key as ToggleOption} disabled={type === key}>
                    {ToggleOptionKeys[key as ToggleOption]}
                </BaseToggleButton>
            ))}
        </BaseToggleButtonGroup>
    );
});

ToggleButtons.displayName = 'ToggleButtons';
