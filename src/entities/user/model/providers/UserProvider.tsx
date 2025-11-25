'use client';

import { useAppDispatch } from '@/shared/hooks/useAppDispatch/useAppDispatch';
import React, { ReactNode, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getToken } from '../selectors/getToken';
import { useGetUserQuery } from '../../api/userApi';
import { setUser } from '../slice/authSlice';

export const UserProvider = ({ children }: { children?: ReactNode }) => {
    const token = useSelector(getToken);
    const dispatch = useAppDispatch();

    const { data, isSuccess } = useGetUserQuery(undefined, { skip: !token });

    useEffect(() => {
        if (isSuccess && data) {
            dispatch(setUser(data));
        }
    }, [isSuccess, data, dispatch]);

    return children;
};
