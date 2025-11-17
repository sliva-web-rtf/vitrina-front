import { Editor } from '@tiptap/core';
import MuiFormatBoldIcon from '@/shared/assets/Icons/MuiFormatBoldIcon';
import MuiFormatItalicIcon from '@/shared/assets/Icons/MuiFormatItalicIcon';
import MuiFormatUnderlinedIcon from '@/shared/assets/Icons/MuiFormatUnderlinedIcon';
import MuiFormatStrikethroughIcon from '@/shared/assets/Icons/MuiFormatStrikethroughIcon';
import MuiFormatColorFillIcon from '@/shared/assets/Icons/MuiFormatColorFillIcon';

import { FormatOption } from '@/shared/ui/TextToolBar/types/FormatOption';

export const getFormatButtonOptions = (editor: Editor): FormatOption[] => [
    {
        format: 'bold',
        icon: <MuiFormatBoldIcon />,
        action: () => editor.chain().focus().toggleBold().run(),
    },
    {
        format: 'italic',
        icon: <MuiFormatItalicIcon />,
        action: () => editor.chain().focus().toggleItalic().run(),
    },
    {
        format: 'underline',
        icon: <MuiFormatUnderlinedIcon />,
        action: () => editor.chain().focus().toggleUnderline().run(),
    },
    {
        format: 'strike',
        icon: <MuiFormatStrikethroughIcon />,
        action: () => editor.chain().focus().toggleStrike().run(),
    },
    {
        format: 'highlight',
        icon: <MuiFormatColorFillIcon />,
        action: () => editor.chain().focus().toggleHighlight().run(),
    },
];
