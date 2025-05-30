import { InstrumentsSideBar } from '@/widgets/InstrumentsSideBar';
import React from 'react';

import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';

const SIDE_BAR_BLOCKS = [
    {
        name: 'Контент',
        actions: [
            {
                name: 'Текст',
                icon: <DescriptionOutlinedIcon />,
                action: () => console.log('HELLO'),
            },
            {
                name: 'Изображение',
                icon: <DescriptionOutlinedIcon />,
                action: () => console.log('HELLO'),
            },
            {
                name: 'Ссылка на соцсеть',
                icon: <DescriptionOutlinedIcon />,
                action: () => console.log('HELLO'),
            },
            {
                name: 'Карусель',
                icon: <DescriptionOutlinedIcon />,
                action: () => alert('in progress...'),
            },
        ],
    },
    {
        name: 'Разделители',
        actions: [
            {
                name: 'Разделитель',
                icon: <DescriptionOutlinedIcon />,
                action: () => alert('in progress...'),
            },
            {
                name: 'Отступ',
                icon: <DescriptionOutlinedIcon />,
                action: () => alert('in progress...'),
            },
        ],
    },
];

export const ConstructorSideBar = () => {
    return <InstrumentsSideBar blocks={SIDE_BAR_BLOCKS} />;
};
