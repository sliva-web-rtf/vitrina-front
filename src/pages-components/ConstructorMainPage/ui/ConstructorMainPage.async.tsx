import dynamic from 'next/dynamic';

const ConstructorMainPage = dynamic(() => import('./ConstructorMainPage'));

export default ConstructorMainPage;
