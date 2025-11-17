import { InstrumentsSideBar } from '@/widgets/InstrumentsSideBar';
import React from 'react';
import { useDispatch } from 'react-redux';
import { addSection, SectionTypes } from '@/entities/constructorProject'; // Import the Redux action

import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';

const getSideBarBlocks = (dispatch: ReturnType<typeof useDispatch>) => [
    {
        name: 'Контент',
        actions: [
            {
                name: 'Текст',
                icon: <DescriptionOutlinedIcon />,
                action: () => {
                    dispatch(
                        addSection({
                            id: Date.now().toString(),
                            type: SectionTypes.text,
                            content: '',
                        }),
                    );
                },
            },
            {
                name: 'Изображение',
                icon: <DescriptionOutlinedIcon />,
                action: () => {
                    dispatch(
                        addSection({
                            id: Date.now().toString(),
                            type: SectionTypes.image,
                            content: '',
                        }),
                    );
                },
            },
            {
                name: 'Ссылка на соцсеть',
                icon: <DescriptionOutlinedIcon />,
                action: () => alert('in progress...'),
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
    const dispatch = useDispatch();
    const SIDE_BAR_BLOCKS = getSideBarBlocks(dispatch);
    return <InstrumentsSideBar blocks={SIDE_BAR_BLOCKS} />;
};
