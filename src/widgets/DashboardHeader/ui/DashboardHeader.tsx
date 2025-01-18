import { Header } from '@/widgets/Header';

const navLinks = [
    { text: 'Цель', href: '#' },
    { text: 'Задачи', href: '#' },
    { text: 'Партнерам', href: '#' },
    { text: 'Студентам', href: '#' },
];

const navButton = { text: 'О витрине проекта', href: '#' };

export const DashboardHeader = () => {
    return <Header nav={navLinks} navButton={navButton} />;
};
