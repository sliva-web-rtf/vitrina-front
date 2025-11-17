import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AuthSchema } from '../types/AuthSchema';
import { User } from '../types/user';
import userApi from '../../api/userApi';

const LOCAL_STORAGE_KEY = 'auth';

const isBrowser = typeof window !== 'undefined';

const loadStateFromLocalStorage = (): AuthSchema => {
    if (isBrowser) {
        const token = localStorage.getItem(LOCAL_STORAGE_KEY);
        const expiresIn = Number(localStorage.getItem(`${LOCAL_STORAGE_KEY}_expiresIn`));

        return {
            token,
            expiresIn,
            isAuthorized: false,
        };
    }
    return initialState;
};

const saveStateToLocalStorage = (state: AuthSchema) => {
    if (isBrowser) {
        if (state.token) localStorage.setItem(LOCAL_STORAGE_KEY, state.token);
        if (state.expiresIn) localStorage.setItem(`${LOCAL_STORAGE_KEY}_expiresIn`, state.expiresIn.toString());
    }
};

const initialState: AuthSchema = {
    isAuthorized: false,
};

const loadedState: AuthSchema = loadStateFromLocalStorage();

const authSlice = createSlice({
    name: 'auth',
    initialState: loadedState,
    reducers: {
        setToken(state, action: PayloadAction<{ token: string; expiresIn: number }>) {
            state.token = action.payload.token;
            state.expiresIn = action.payload.expiresIn;
            saveStateToLocalStorage(state);
        },
        clearToken(state) {
            state.token = undefined;
            state.expiresIn = undefined;
            saveStateToLocalStorage(state);
        },
        setUser(state, action: PayloadAction<User>) {
            state.user = action.payload;
            state.isAuthorized = true;
        },
    },
});

export const { setToken, clearToken, setUser } = authSlice.actions;

export const { reducer: authReducer } = authSlice;
