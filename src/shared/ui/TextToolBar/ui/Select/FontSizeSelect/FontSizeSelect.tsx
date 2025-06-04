import { Select, MenuItem } from '@mui/material';
import { Editor } from '@tiptap/react';

import { fontSizes } from '../../../const/fontSizes';

import styles from '../../TextToolBar.module.scss';

export const FontSizeSelect = ({ editor }: { editor: Editor }) => {
    return (
        <Select
            variant="standard"
            value={editor.getAttributes('textStyle')?.fontSize || '16px'}
            onChange={(e) => {
                editor.chain().focus().setFontSize(e.target.value).run();
            }}
            sx={{ minWidth: 40 }}
            className={styles.selectWithoutUnderline}
        >
            {fontSizes.map((size) => (
                <MenuItem key={size} value={`${size}px`}>
                    {size}
                </MenuItem>
            ))}
        </Select>
    );
};
