import { BaseSelect } from '@/shared/ui';
import { BaseSearch } from '@/shared/ui/Field/BaseSearch';
import { Stack } from '@mui/material';
import { ChangeEvent, memo, useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useDebounce } from 'use-debounce';
import { useGetOrganizationsQuery, useGetPeriodsQuery } from '../api/filterApi';
import { semesterOptions } from '../model/const/semesterOptions';
import { getFilter } from '../model/selectors/getFilter/getFilter';
import { filterActions } from '../model/slice/filterSlice';
import { FilterType } from '../model/types/filterType';

const { setName, setCustomer, setProjectType, setSphere } = filterActions;
const actionMap = {
    [FilterType.Name]: setName,
    [FilterType.Customer]: setCustomer,
    [FilterType.ProjectType]: setProjectType,
    [FilterType.Sphere]: setSphere,
};

export const Filter = memo(() => {
    const dispatch = useDispatch();
    const { name, customer, projectType, sphere } = useSelector(getFilter);
    const [search, setSearch] = useState(name);
    const [debounceSearch] = useDebounce(search, 300);

    const handleFilterChange = useCallback(
        (type: FilterType) => (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(actionMap[type](e.target.value));
        },
        [dispatch],
    );

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
                    [theme.breakpoints.down('lg')]: {
                        flexDirection: 'column',
                    },
                })}
            >
                <Stack
                    direction="row"
                    sx={(theme) => ({
                        alignItems: 'center',
                        gap: 'var(--space-m)',
                        [theme.breakpoints.down('sm')]: {
                            flexDirection: 'column',
                        },
                    })}
                >
                    <BaseSelect
                        label="Заказчик"
                        options={periodOptions}
                        value={customer}
                        loading={isPeriodsFetching}
                        onChange={handleFilterChange(FilterType.Customer)}
                    />
                    <BaseSelect
                        label="Тип проекта"
                        options={semesterOptions}
                        value={projectType}
                        onChange={handleFilterChange(FilterType.ProjectType)}
                    />
                    <BaseSelect
                        label="Сфера"
                        options={orgsOptions}
                        value={sphere}
                        loading={isOrgsFetching}
                        onChange={handleFilterChange(FilterType.Sphere)}
                    />
                </Stack>
                <BaseSearch placeholder="Поиск проекта" value={search} onChange={(e) => setSearch(e.target.value)} />
            </Stack>
        </Stack>
    );
});

Filter.displayName = 'Filter';
