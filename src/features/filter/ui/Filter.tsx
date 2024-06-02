import { ChangeEvent, memo, useCallback } from 'react';
import classNames from './Filter.module.scss';
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

    const handleFilterChange = useCallback(
        (type: FilterType) => (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(actionMap[type](e.target.value as never));
        },
        [dispatch],
    );

    const handleClearFilters = useCallback(() => {
        dispatch(clear());
    }, [dispatch]);

    const { isFetching: isPeriodsFetching, data: periodOptions } = useGetPeriodsQuery(undefined);
    const { isFetching: isOrgsFetching, data: orgsOptions } = useGetOrganizationsQuery(undefined);

    return (
        <Stack className={classNames.filter}>
            <BaseSearch
                placeholder="Введите название проекта или описание"
                onChange={handleFilterChange(FilterType.Name)}
                value={name}
            />
            <Stack className={classNames.row} direction="row">
                <Stack className={classNames.selects} direction="row">
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
                        value={semester}
                        onChange={handleFilterChange(FilterType.Semester)}
                    />
                    <BaseSelect
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
