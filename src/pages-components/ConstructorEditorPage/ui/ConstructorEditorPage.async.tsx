import dynamic from 'next/dynamic';

const ConstructorEditorPageAsync = dynamic(() => import('./ConstructorEditorPage'));

export default ConstructorEditorPageAsync;
