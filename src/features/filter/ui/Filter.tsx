import { ChangeEvent, memo, useCallback, useEffect, useState } from 'react';
import { Stack } from '@mui/material';
import { BaseSearch } from '@/shared/ui/Field/BaseSearch';
import { BaseButton, BaseSelect } from '@/shared/ui';
import ClearIcon from '@mui/icons-material/Clear';
import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from '../model/selectors/getFilter/getFilter';
import { filterActions } from '../model/slice/filterSlice';
import { FilterType } from '../model/types/filterType';
import { semesterOptions } from '../model/const/semesterOptions';
import { useGetOrganizationsQuery, useGetPeriodsQuery } from '../api/filterApi.ts';
import { useDebounce } from 'use-debounce';

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

    const handleFilterChange = useCallback(
        (type: FilterType) => (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(actionMap[type](e.target.value));
        },
        [dispatch],
    );

    const handleClearFilters = useCallback(() => {
        dispatch(clear());
    }, [dispatch]);

    useEffect(() => {
        if (debounceSearch !== name) {
            dispatch(setName(debounceSearch));
        }
    }, [dispatch, name, debounceSearch]);

    const { isFetching: isPeriodsFetching, data: periodOptions } = useGetPeriodsQuery(undefined);
    const { isFetching: isOrgsFetching, data: orgsOptions } = useGetOrganizationsQuery(undefined);

    return (
        <Stack sx={{rowGap: 'var(--space-xl)'}}>
            <BaseSearch
                placeholder="Введите название проекта или описание"
                onChange={e => setSearch(e.target.value)}
            />
            <Stack
                sx={theme => ({
                    flex: 1,
                    gap: 'var(--space-xl)',
                    flexDirection: 'row',
                    [theme.breakpoints.down('md')]: {
                        flexDirection: 'column',
                    },
                })}
            >
                <Stack direction='row' sx={theme => ({
                    flex: 1,
                    gap: 'var(--space-m)',
                    [theme.breakpoints.down('sm')]: {
                        flexDirection: 'column',
                    },
                })}>
                    <BaseSelect
                        fullWidth
                        label="Период"
                        options={periodOptions}
                        value={period}
                        loading={isPeriodsFetching}
                        onChange={handleFilterChange(FilterType.Period)}
                    />
                    <BaseSelect
                        fullWidth
                        label="Семестр"
                        options={semesterOptions}
                        value={semester}
                        onChange={handleFilterChange(FilterType.Semester)}
                    />
                    <BaseSelect
                        fullWidth
                        label="Организация"
                        options={orgsOptions}
                        value={organization}
                        loading={isOrgsFetching}
                        onChange={handleFilterChange(FilterType.Organization)}
                    />
                </Stack>
                <BaseButton variant="outlined" startIcon={<ClearIcon />} onClick={handleClearFilters}>
                    Сбросить фильтры
                </BaseButton>
            </Stack>
        </Stack>
    );
});
