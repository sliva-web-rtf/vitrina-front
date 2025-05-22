import { SelectChangeEvent } from '@mui/material/Select';
import { Select, MenuItem } from '@mui/material';
import { Editor } from '@tiptap/react';

import { headingLevels } from '@/shared/lib/const/headingLevels';
import { Level } from '@/shared/lib/types/Level';

import styles from '../../TextToolBar.module.scss';

export const BlockTypeSelect = ({ editor }: { editor: Editor }) => {
    const currentBlockType = () => {
        for (const level of headingLevels) {
            if (editor.isActive('heading', { level })) return `h${level}`;
        }
        return editor.isActive('paragraph') ? 'paragraph' : '';
    };

    const handleBlockTypeChange = (e: SelectChangeEvent) => {
        const value = e.target.value;

        if (value === 'paragraph') {
            editor.chain().focus().unsetFontSize().setParagraph().run();
            return;
        }

        const level = parseInt(value.replace('h', ''), 10) as Level;
        editor.chain().focus().unsetFontSize().toggleHeading({ level }).run();
    };

    return (
        <Select
            variant="standard"
            value={currentBlockType()}
            onChange={handleBlockTypeChange}
            sx={{ minWidth: 120 }}
            className={styles.selectWithoutUnderline}
        >
            <MenuItem value="paragraph">Обычный текст</MenuItem>
            {headingLevels.map((level) => (
                <MenuItem key={level} value={`h${level}`}>
                    Заголовок {level}
                </MenuItem>
            ))}
        </Select>
    );
};
