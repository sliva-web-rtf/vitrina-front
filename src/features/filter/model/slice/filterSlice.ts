import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FilterSchema } from '../types/filterSchema';

export const initialState: FilterSchema = {
    name: '',
    customer: '',
    projectType: '',
    sphere: '',
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
        setCustomer: (state, action: PayloadAction<FilterSchema['customer']>) => {
            (state.customer = action.payload), 10;
        },
        setProjectType: (state, action: PayloadAction<FilterSchema['projectType']>) => {
            state.projectType = action.payload;
        },
        setSphere: (state, action: PayloadAction<FilterSchema['sphere']>) => {
            state.sphere = action.payload;
        },
        setPage: (state, action: PayloadAction<FilterSchema['page']>) => {
            state.page = action.payload;
            window.scrollTo(0, 0.9 * window.innerHeight);
        },
        clear: () => initialState,
    },
});

export const { actions: filterActions } = filterSlice;
export const { reducer: filterReducer } = filterSlice;
