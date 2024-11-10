import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { DetailsSchema } from '../types/detailsShema';
import { ProjectDetails } from '../types/projectDetails';

const initialState: DetailsSchema = {};

export const detailsSlice = createSlice({
    name: 'details',
    initialState,
    reducers: {
        changeEditableProject: (state, action: PayloadAction<ProjectDetails | undefined>) => {
            state.editableProject = action.payload;
        },
    },
});

export const { reducer: detailsReducer } = detailsSlice;
export const { actions: detailsActions } = detailsSlice;
