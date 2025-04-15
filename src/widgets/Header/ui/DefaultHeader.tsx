import React from 'react';
import { Header } from './Header';

const NAV_LINKS = [
    { text: 'Главная', href: '/' },
    { text: 'Эксперты', href: '/experts' },
    { text: 'О нас', href: '/about' },
];

const NAV_BUTTON = { text: 'Поделиться работой', href: '/share-project' };

export const DefaultHeader = () => {
    return <Header nav={NAV_LINKS} navButton={NAV_BUTTON} />;
};
