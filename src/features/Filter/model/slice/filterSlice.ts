import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FilterSchema } from '../types/filterSchema';

export const initialState: FilterSchema = {
    search: '',
    year: '',
    period: '',
    organization: '',
};

export const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setSearch: (state, action: PayloadAction<FilterSchema['search']>) => {
            state.search = action.payload;
        },
        setYear: (state, action: PayloadAction<FilterSchema['year']>) => {
            state.year = action.payload;
        },
        setPeriod: (state, action: PayloadAction<FilterSchema['period']>) => {
            state.period = action.payload;
        },
        setOrganization: (state, action: PayloadAction<FilterSchema['organization']>) => {
            state.organization = action.payload;
        },
        clear: () => initialState,
    },
});

export const { actions: filterActions } = filterSlice;
export const { reducer: filterReducer } = filterSlice;
