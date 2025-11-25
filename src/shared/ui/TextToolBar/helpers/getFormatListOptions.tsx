import { Editor } from '@tiptap/core';
import MuiFormatListNumberedIcon from '@/shared/assets/Icons/MuiFormatListNumberedIcon';
import MuiFormatListBulletedIcon from '@/shared/assets/Icons/MuiFormatListBulletedIcon';

import { FormatOption } from '@/shared/ui/TextToolBar/types/FormatOption';

export const getFormatListOptions = (editor: Editor): FormatOption[] => [
    {
        format: 'orderedList',
        icon: <MuiFormatListNumberedIcon />,
        action: () => editor.chain().focus().toggleOrderedList().run(),
    },
    {
        format: 'bulletList',
        icon: <MuiFormatListBulletedIcon />,
        action: () => editor.chain().focus().toggleBulletList().run(),
    },
];
