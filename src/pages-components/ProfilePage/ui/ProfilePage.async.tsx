import dynamic from 'next/dynamic';

const ProfilePageAsync = dynamic(() => import('./ProfilePage'));

export default ProfilePageAsync;
