'use client';

import { ReactNode } from 'react';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '@/shared/api/query-client';

interface QueryProviderProps {
    children?: ReactNode;
}

export const QueryProvider = (props: QueryProviderProps) => {
    const { children } = props;

    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    );
};