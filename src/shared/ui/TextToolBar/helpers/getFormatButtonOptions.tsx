import { Editor } from '@tiptap/core';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import FormatStrikethroughIcon from '@mui/icons-material/FormatStrikethrough';
import FormatColorFillIcon from '@mui/icons-material/FormatColorFill';

import { FormatOption } from '@/shared/lib/types/FormatOption';

export const getFormatButtonOptions = (editor: Editor): FormatOption[] => [
    {
        format: 'bold',
        icon: <FormatBoldIcon />,
        action: () => editor.chain().focus().toggleBold().run(),
    },
    {
        format: 'italic',
        icon: <FormatItalicIcon />,
        action: () => editor.chain().focus().toggleItalic().run(),
    },
    {
        format: 'underline',
        icon: <FormatUnderlinedIcon />,
        action: () => editor.chain().focus().toggleUnderline().run(),
    },
    {
        format: 'strike',
        icon: <FormatStrikethroughIcon />,
        action: () => editor.chain().focus().toggleStrike().run(),
    },
    {
        format: 'highlight',
        icon: <FormatColorFillIcon />,
        action: () => editor.chain().focus().toggleHighlight().run(),
    },
];
