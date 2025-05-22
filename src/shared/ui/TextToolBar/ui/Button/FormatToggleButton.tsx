import { Editor } from '@tiptap/core';
import { ToggleButton } from '@mui/material';

export const FormatToggleButton = ({
    editor,
    format,
    icon,
    action,
}: {
    editor: Editor;
    format: string;
    icon: React.ReactNode;
    action: () => boolean;
}) => (
    <ToggleButton
        value={format}
        selected={editor.isActive(format)}
        onClick={action}
        sx={{
            borderRadius: '50%',
            border: 'none',
            width: 40,
            height: 40,
            minWidth: 40,
            '&:hover': {
                backgroundColor: 'rgba(0, 0, 0, 0.04)',
            },
            '&.Mui-selected': {
                backgroundColor: 'rgba(0, 0, 0, 0.12)',
            },
        }}
    >
        {icon}
    </ToggleButton>
);
