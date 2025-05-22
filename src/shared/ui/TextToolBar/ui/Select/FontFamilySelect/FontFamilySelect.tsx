import { Select, MenuItem } from '@mui/material';
import { SelectChangeEvent } from '@mui/material/Select';
import { Editor } from '@tiptap/react';

import { fontFamilies } from '../../../const/fontFamilies';

import styles from '../../TextToolBar.module.scss';

export const FontFamilySelect = ({ editor }: { editor: Editor }) => {
    const fontFamilyHadnleChange = (e: SelectChangeEvent) => {
        const value = e.target.value;
        if (value) {
            editor.chain().focus().setFontFamily(value).run();
        } else {
            editor.chain().focus().unsetFontFamily().run();
        }
    };

    return (
        <Select
            variant="standard"
            value={editor.getAttributes('textStyle')?.fontFamily || 'Arial, sans-serif'}
            onChange={fontFamilyHadnleChange}
            sx={{ minWidth: 60 }}
            className={styles.selectWithoutUnderline}
        >
            {fontFamilies.map(({ label, value }) => (
                <MenuItem key={value} value={value}>
                    {label}
                </MenuItem>
            ))}
        </Select>
    );
};
