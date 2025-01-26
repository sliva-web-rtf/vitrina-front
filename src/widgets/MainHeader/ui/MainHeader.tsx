'use client';

import { Header } from '@/widgets/Header';
import { navLinks } from '../model/constants';

const navButton = { href: '/dashboard', text: 'О проектном практикуме' };

export const MainHeader = () => <Header nav={navLinks} navButton={navButton} />;
