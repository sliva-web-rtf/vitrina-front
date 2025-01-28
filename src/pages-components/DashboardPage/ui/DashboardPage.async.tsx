import dynamic from 'next/dynamic';

const DashboardPageAsync = dynamic(() => import('./DashboardPage'));

export default DashboardPageAsync;
