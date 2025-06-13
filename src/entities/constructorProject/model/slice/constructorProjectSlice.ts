import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ConstructorProjectSchema } from '../types/ConstructorProjectSchema';
import { SectionTypes } from '../types/SectionTypes';
import { SectionSchema } from '../types/SectionSchema';

const LOCAL_STORAGE_KEY = 'lastEditedProject';

const isBrowser = typeof window !== 'undefined';

const initialState: ConstructorProjectSchema = {
    name: 'Новый проект',
    sections: [{ id: Date.now().toString(), type: SectionTypes.text, content: 'Текстовый блок' }],
};

const loadStateFromLocalStorage = (): ConstructorProjectSchema => {
    if (isBrowser) {
        const savedState = localStorage.getItem(LOCAL_STORAGE_KEY);
        return savedState ? JSON.parse(savedState) : initialState;
    }
    return initialState;
};

const saveStateToLocalStorage = (state: ConstructorProjectSchema) => {
    if (isBrowser) {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(state));
    }
};

const loadedState: ConstructorProjectSchema = loadStateFromLocalStorage();

const constructorProjectSlice = createSlice({
    name: 'constructorProject',
    initialState: loadedState,
    reducers: {
        setProjectName(state, action: PayloadAction<string>) {
            state.name = action.payload;
            saveStateToLocalStorage(state);
        },
        addSection(state, action: PayloadAction<SectionSchema>) {
            state.sections.push(action.payload);
            saveStateToLocalStorage(state);
        },
        setSection(state, action: PayloadAction<{ section: SectionSchema }>) {
            const { section } = action.payload;
            const index = state.sections.findIndex((s) => s.id === section.id);
            if (index !== -1) {
                state.sections[index] = section;
                saveStateToLocalStorage(state);
            }
        },
        setSections(state, action: PayloadAction<SectionSchema[]>) {
            state.sections = action.payload;
            saveStateToLocalStorage(state);
        },
        deleteSection(state, action: PayloadAction<string>) {
            const index = state.sections.findIndex((s) => s.id === action.payload);
            if (index !== -1) {
                state.sections.splice(index, 1);
                saveStateToLocalStorage(state);
            }
        },
        duplicateSection(state, action: PayloadAction<string>) {
            const id = action.payload;
            const index = state.sections.findIndex((s) => s.id === id);
            if (index !== -1) {
                const sectionToDuplicate = { ...state.sections[index], id: Date.now().toString() };
                state.sections.splice(index + 1, 0, sectionToDuplicate);
                saveStateToLocalStorage(state);
            }
        },
    },
});

export const { setProjectName, addSection, setSection, setSections, duplicateSection, deleteSection } =
    constructorProjectSlice.actions;

export const { reducer: constructorProjectReducer } = constructorProjectSlice;
