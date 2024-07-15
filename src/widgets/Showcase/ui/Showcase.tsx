import { ChangeEvent } from 'react';
import { Filter, filterActions, getFilter } from '@/features/filter';
import { Stack } from '@mui/material';
import { getTotalPages, ProjectsList } from '@/widgets/ProjectsList';
import { BasePagination } from '@/shared/ui';
import { useDispatch, useSelector } from 'react-redux';

export const Showcase = () => {
    const dispatch = useDispatch();
    const { page } = useSelector(getFilter);
    const totalPages = useSelector(getTotalPages);

    const handlePageChange = (_: ChangeEvent<unknown>, value: number) => {
        dispatch(filterActions.setPage(value));
    };
    return (
        <Stack spacing={8}>
            <Filter />
            <ProjectsList />
            <BasePagination page={page} count={totalPages} onChange={handlePageChange} />
        </Stack>
    );
};
