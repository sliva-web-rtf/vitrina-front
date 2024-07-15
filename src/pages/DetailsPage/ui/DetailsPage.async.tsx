import dynamic from 'next/dynamic';

export const DetailsPageAsync = dynamic(() => import('./DetailsPage'));
