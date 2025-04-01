import dynamic from 'next/dynamic';

const ProfileEditPageAsync = dynamic(() => import('./ProfileEdtiPage'));

export default ProfileEditPageAsync;
