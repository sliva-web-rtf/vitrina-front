export type Expert = {
    id: number;
    name: string;
    avatarUrl?: string;
    workCompany: string;
    workPosition: string;
};

export const EXPERTS: Expert[] = [
    {
        id: 1,
        name: 'Шестеров Михаил Андреевич',
        workCompany: 'УрФУ ИРИТ-РТФ',
        workPosition: 'Руководитель Проектного практикума',
    },
    {
        id: 2,
        name: 'Обабков Илья Николаевич',
        workCompany: 'УрФУ ИРИТ-РТФ',
        workPosition: 'Директор',
        avatarUrl: 'https://vuc.urfu.ru/fileadmin/_processed_/a/b/csm_Obabkov_59e8f30982.png',
    },
];
