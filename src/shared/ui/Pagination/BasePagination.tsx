import { Pagination, PaginationItem, PaginationProps, Stack, styled } from '@mui/material';

const StyledPagination = styled((props: PaginationProps) => (
    <Pagination shape="rounded" renderItem={item => <PaginationItem {...item} />} siblingCount={0} {...props} />
))(({ theme }) => ({
    '& .MuiPaginationItem-page': {
        fontWeight: 500,
    },
    '& .MuiPaginationItem-root.Mui-selected': {
        color: theme.palette.primary.contrastText,
        background: theme.palette.primary.main,
    },
    '& .MuiPagination-ul': {
        columnGap: theme.spacing(0.5),
    },
}));

export const BasePagination = (props: PaginationProps) => (
    <Stack direction="row" justifyContent="center">
        <StyledPagination {...props} />
    </Stack>
);
