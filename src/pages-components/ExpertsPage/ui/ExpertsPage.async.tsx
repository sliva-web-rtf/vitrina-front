import dynamic from 'next/dynamic';

const ExpertsPageAsync = dynamic(() => import('./ExpertsPage'));
export default ExpertsPageAsync;
