import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FilterSchema } from '../types/filterSchema';

export const initialState: FilterSchema = {
    name: '',
    period: '',
    organization: '',
    semester: null,
    page: 1,
    pageSize: 16,
};

export const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setName: (state, action: PayloadAction<FilterSchema['name']>) => {
            state.name = action.payload;
        },
        setSemester: (state, action: PayloadAction<string>) => {
            state.semester = parseInt(action.payload, 10);
        },
        setPeriod: (state, action: PayloadAction<FilterSchema['period']>) => {
            state.period = action.payload;
        },
        setOrganization: (state, action: PayloadAction<FilterSchema['organization']>) => {
            state.organization = action.payload;
        },
        setPage: (state, action: PayloadAction<FilterSchema['page']>) => {
            state.page = action.payload;
            window.scrollTo(0, 0);
        },
        clear: () => initialState,
    },
});

export const { actions: filterActions } = filterSlice;
export const { reducer: filterReducer } = filterSlice;
