import { ProjectsListSchema } from '@/widgets/ProjectsList/model/types/projectsListSchema';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const initialState: ProjectsListSchema = {
    totalPages: 1,
};

export const projectsListSlice = createSlice({
    name: 'projectsList',
    initialState,
    reducers: {
        setTotalPages: (state, action: PayloadAction<ProjectsListSchema['totalPages']>) => {
            state.totalPages = action.payload;
        },
    },
});

export const { actions: projectsListActions } = projectsListSlice;
export const { reducer: projectsListReducer } = projectsListSlice;
