import dynamic from 'next/dynamic';

const MainPage = dynamic(() => import('./MainPage'));
export default MainPage;
