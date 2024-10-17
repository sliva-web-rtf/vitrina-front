'use client';

import { Header } from '@/widgets/Header';
import { navLinks } from '../model/constants';

const navButton = { href: '#projects', text: 'Витрина проектов' };

export const MainHeader = () => <Header nav={navLinks} navButton={navButton} />;
