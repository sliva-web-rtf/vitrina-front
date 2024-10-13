import { Filter, filterActions, getFilter } from '@/features/filter';
import { BasePagination, VStack } from '@/shared/ui';
import { getTotalPages, ProjectsList } from '@/widgets/ProjectsList';
import { ShowcaseHeader } from '@/widgets/ShowcaseHeader';
import { ChangeEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './Showcase.module.scss';

export const Showcase = () => {
    const dispatch = useDispatch();
    const { page } = useSelector(getFilter);
    const totalPages = useSelector(getTotalPages);

    const handlePageChange = (_: ChangeEvent<unknown>, value: number) => {
        dispatch(filterActions.setPage(value));
    };

    return (
        <VStack spacing={8} className={styles.container}>
            <ShowcaseHeader />
            <Filter />
            <ProjectsList />
            <BasePagination page={page} count={totalPages} onChange={handlePageChange} />
        </VStack>
    );
};
