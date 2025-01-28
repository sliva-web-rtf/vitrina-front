import { Header } from '@/widgets/Header';

const navLinks = [
    { text: 'Цель', href: '#goal' },
    { text: 'Задачи', href: '#tasks' },
    { text: 'Партнерам', href: '#partnership' },
    { text: 'Студентам', href: '#studentsAwait' },
];

const navButton = { text: 'О витрине проекта', href: '#' };

export const DashboardHeader = () => {
    return <Header nav={navLinks} navButton={navButton} />;
};
