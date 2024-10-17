import dynamic from 'next/dynamic';

const DetailsPage = dynamic(() => import('./DetailsPage'));
export default DetailsPage;
