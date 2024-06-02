import { Pagination, PaginationItem, PaginationProps, Stack, styled } from '@mui/material';
import { ReactNode } from 'react';

interface NavigationButtonProps {
    children: ReactNode;
}

const NavigationButton = ({ children }: NavigationButtonProps) => (
    <Stack direction="row" spacing={1}>
        {children}
    </Stack>
);

const PrevSlot = () => <NavigationButton>Назад</NavigationButton>;
const NextSlot = () => <NavigationButton>Вперед</NavigationButton>;

const StyledPagination = styled((props: PaginationProps) => (
    <Pagination
        shape="rounded"
        renderItem={item => <PaginationItem slots={{ previous: PrevSlot, next: NextSlot }} {...item} />}
        {...props}
    />
))(({ theme }) => ({
    '& .MuiPaginationItem-page': {
        fontWeight: 500,
    },
    '& .MuiPaginationItem-root.Mui-selected': {
        color: theme.palette.primary.contrastText,
        background: theme.palette.primary.main,
    },
    '& .Mui-disabled': {},
    '& .MuiPagination-ul': {
        columnGap: theme.spacing(0.5),
    },
}));

export const BasePagination = (props: PaginationProps) => (
    <Stack direction="row" justifyContent="center">
        <StyledPagination {...props} />
    </Stack>
);
