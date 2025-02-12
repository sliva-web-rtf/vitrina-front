export type Expert = {
    id: number;
    name: string;
    avatarUrl?: string;
    workCompany: string;
    workPosition: string;
};

export const TEST_EXPERTS: Expert[] = [
    {
        id: 1,
        name: 'Богдан Бикаев',
        workCompany: 'ООО "Яндекс"',
        workPosition: 'Генеральный директор',
    },
    {
        id: 2,
        name: 'Илья Обабков',
        workCompany: 'УрФУ ИРИТ-РТФ',
        workPosition: 'Директор',
        avatarUrl: 'https://vuc.urfu.ru/fileadmin/_processed_/a/b/csm_Obabkov_59e8f30982.png',
    },
    {
        id: 3,
        name: 'Тим кук',
        workCompany: 'Apple',
        workPosition: 'Генеральный директор',
        avatarUrl:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Visit_of_Tim_Cook_to_the_European_Commission_-_P061904-946789.jpg/250px-Visit_of_Tim_Cook_to_the_European_Commission_-_P061904-946789.jpg',
    },
    { id: 4, name: 'Wylsacom', workCompany: 'YouTube', workPosition: 'Техноблогер' },
    { id: 5, name: 'Jony Ive', workCompany: 'Apple', workPosition: 'Дизайнер' },
];
