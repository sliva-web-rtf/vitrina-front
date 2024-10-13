'use client';

import { ToggleButtons } from '@/features/ToggleButtons';
import { BaseButton, BaseSelect, HStack } from '@/shared/ui';
import { BaseSearch } from '@/shared/ui/Field/BaseSearch';
import ClearIcon from '@mui/icons-material/Clear';
import { Stack } from '@mui/material';
import { ChangeEvent, memo, useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useDebounce } from 'use-debounce';
import { useGetOrganizationsQuery, useGetPeriodsQuery } from '../api/filterApi';
import { semesterOptions } from '../model/const/semesterOptions';
import { getFilter } from '../model/selectors/getFilter/getFilter';
import { filterActions } from '../model/slice/filterSlice';
import { FilterType } from '../model/types/filterType';

const { setName, setSemester, setPeriod, setOrganization, clear } = filterActions;
const actionMap = {
    [FilterType.Name]: setName,
    [FilterType.Semester]: setSemester,
    [FilterType.Period]: setPeriod,
    [FilterType.Organization]: setOrganization,
};

export const Filter = memo(() => {
    const dispatch = useDispatch();
    const { name, period, semester, organization } = useSelector(getFilter);
    const [search, setSearch] = useState(name);
    const [debounceSearch] = useDebounce(search, 300);
    const isFiltersApply = name || period || semester || organization;

    const handleFilterChange = useCallback(
        (type: FilterType) => (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(actionMap[type](e.target.value));
        },
        [dispatch],
    );

    const handleClearFilters = useCallback(() => {
        dispatch(clear());
        setSearch('');
    }, [dispatch]);

    useEffect(() => {
        if (debounceSearch !== name) {
            dispatch(setName(debounceSearch));
        }
    }, [dispatch, name, debounceSearch]);

    const { isFetching: isPeriodsFetching, data: periodOptions } = useGetPeriodsQuery(undefined);
    const { isFetching: isOrgsFetching, data: orgsOptions } = useGetOrganizationsQuery(undefined);

    return (
        <Stack sx={{ rowGap: 'var(--space-xl)' }}>
            <Stack
                justifyContent="space-between"
                sx={(theme) => ({
                    gap: 'var(--space-xl)',
                    flexDirection: 'row',
                    [theme.breakpoints.down('md')]: {
                        flexDirection: 'column',
                    },
                })}
            >
                <Stack
                    direction="row"
                    sx={(theme) => ({
                        gap: 'var(--space-m)',
                        [theme.breakpoints.down('sm')]: {
                            flexDirection: 'column',
                        },
                    })}
                >
                    <BaseSelect
                        label="Период"
                        options={periodOptions}
                        value={period}
                        loading={isPeriodsFetching}
                        onChange={handleFilterChange(FilterType.Period)}
                    />
                    <BaseSelect
                        label="Семестр"
                        options={semesterOptions}
                        value={semester || ''}
                        onChange={handleFilterChange(FilterType.Semester)}
                    />
                    <BaseSelect
                        label="Организация"
                        options={orgsOptions}
                        value={organization}
                        loading={isOrgsFetching}
                        onChange={handleFilterChange(FilterType.Organization)}
                    />
                    {isFiltersApply && (
                        <BaseButton variant="outlined" startIcon={<ClearIcon />} onClick={handleClearFilters}>
                            Сбросить фильтры
                        </BaseButton>
                    )}
                </Stack>
                <BaseSearch placeholder="Поиск проекта" value={search} onChange={(e) => setSearch(e.target.value)} />
            </Stack>
            <HStack justifyContent="center">
                <ToggleButtons />
            </HStack>
        </Stack>
    );
});

Filter.displayName = 'Filter';
