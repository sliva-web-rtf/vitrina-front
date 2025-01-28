import { Header } from '@/widgets/Header';

const navLinks = [
    { href: '#problem', text: 'Проблема' },
    { href: '#idea', text: 'Идея' },
    { href: '#solution', text: 'Решение' },
    { href: '#team', text: 'Команда' },
];

const navButton = { href: '/dashboard', text: 'О проектном практикуме' };

export const DetailsHeader = () => <Header nav={navLinks} navButton={navButton} />;
