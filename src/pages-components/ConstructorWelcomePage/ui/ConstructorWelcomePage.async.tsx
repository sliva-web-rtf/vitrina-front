import dynamic from 'next/dynamic';

const ConstructorWelcomePage = dynamic(() => import('./ConstructorWelcomePage'));

export default ConstructorWelcomePage;
