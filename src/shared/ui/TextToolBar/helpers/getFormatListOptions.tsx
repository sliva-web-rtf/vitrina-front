import { Editor } from '@tiptap/core';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';

import { FormatOption } from '@/shared/lib/types/FormatOption';

export const getFormatListOptions = (editor: Editor): FormatOption[] => [
    {
        format: 'orderedList',
        icon: <FormatListNumberedIcon />,
        action: () => editor.chain().focus().toggleOrderedList().run(),
    },
    {
        format: 'bulletList',
        icon: <FormatListBulletedIcon />,
        action: () => editor.chain().focus().toggleBulletList().run(),
    },
];
