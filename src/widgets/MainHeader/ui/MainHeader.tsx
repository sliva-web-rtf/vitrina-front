'use client';

import { Header } from '@/widgets/Header';

const navLinks = [
    { href: '#projects', text: 'Топ' },
    { href: '#projects', text: 'Все проекты' },
];

const navButton = { href: '#projects', text: 'Витрина проектов' };

export const MainHeader = () => <Header nav={navLinks} navButton={navButton} />;
