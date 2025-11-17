<<<<<<< HEAD
import axios from 'axios';

export const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
=======
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { StateSchema } from './StateSchema';
import { baseApi } from '@/shared/api';
import { filterReducer } from '@/features/filter';
import { projectsListReducer } from '@/widgets/ProjectsList';
import { detailsReducer } from '@/entities/project';
import { constructorProjectReducer } from '@/entities/constructorProject';
import { authReducer } from '@/entities/user';

// TODO: добавить динамическую подгрузку стейта.
const rootReducer = combineReducers({
    filter: filterReducer,
    projectsList: projectsListReducer,
    projectDetails: detailsReducer,
    auth: authReducer,
    constructorProject: constructorProjectReducer,
    [baseApi.reducerPath]: baseApi.reducer,
>>>>>>> 73109a8c3f19913dbae25fd5a9ec15a77a01d887
});

apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('token');
    }
    return Promise.reject(error);
  }
);
