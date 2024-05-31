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

const { setSearch, setYear, setPeriod, setOrganization, clear } = filterActions;
const actionMap = {
    [FilterType.Search]: setSearch,
    [FilterType.Year]: setYear,
    [FilterType.Period]: setPeriod,
    [FilterType.Organization]: setOrganization,
};

export const Filter = memo(() => {
    const dispatch = useDispatch();
    // Не обновляется селектор!
    const { search, period, year, organization } = useSelector(getFilter);

    const handleFilterChange = useCallback(
        (type: FilterType) => (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(actionMap[type](e.target.value));
        },
        [dispatch],
    );

    const handleClearFilters = useCallback(() => {
        dispatch(clear());
    }, [dispatch]);

    return (
        <Stack className={classNames.filter}>
            <BaseSearch
                placeholder="Введите название проекта или описание"
                onChange={handleFilterChange(FilterType.Search)}
                value={search}
            />
            <Stack className={classNames.row} direction="row">
                <Stack className={classNames.selects} direction="row">
                    <BaseSelect
                        label="Год"
                        options={['2023', '2024']}
                        onChange={handleFilterChange(FilterType.Year)}
                        value={year}
                    />
                    <BaseSelect
                        label="Семестр"
                        options={['2023/2024']}
                        onChange={handleFilterChange(FilterType.Period)}
                        value={period}
                    />
                    <BaseSelect
                        label="Организация"
                        options={['11312']}
                        onChange={handleFilterChange(FilterType.Organization)}
                        value={organization}
                    />
                </Stack>
                <BaseButton variant="outlined" startIcon={<ClearIcon />} onClick={handleClearFilters}>
                    Сбросить фильтры
                </BaseButton>
            </Stack>
        </Stack>
    );
});
