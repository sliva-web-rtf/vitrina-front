import { ReactNode } from 'react';

export type SideBarActions = {
    name: string;
    icon: string | ReactNode;
    action: () => void;
};
