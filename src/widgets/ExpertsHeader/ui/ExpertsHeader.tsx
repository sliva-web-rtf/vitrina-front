import { Header } from '@/widgets/Header';

const navLinks = [
    { text: 'Цель', href: '#goal' },
    { text: 'Задачи', href: '#tasks' },
    { text: 'Партнерам', href: '#partnership' },
    { text: 'Студентам', href: '#studentsAwait' },
];

const navButton = { text: 'Поделиться работой', href: '/share' };

export const ExpertsHeader = () => {
    return <Header nav={navLinks} navButton={navButton} />;
};
