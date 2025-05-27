import { Select, MenuItem, ListItemIcon } from '@mui/material';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import { Editor } from '@tiptap/react';

import { alignOptions } from '../../../const/alignOptions';

import { textAlignOptions } from '../../../const/textAlignOptions';

import styles from '../../TextToolBar.module.scss';

export const AlignSelect = ({ editor }: { editor: Editor }) => {
    const getCurrentTextAlign = () => {
        for (const align of textAlignOptions) {
            if (editor.isActive({ textAlign: align })) return align;
        }
        return 'left';
    };
    return (
        <Select
            variant="standard"
            value={getCurrentTextAlign()}
            onChange={(e) => {
                editor.chain().focus().setTextAlign(e.target.value).run();
            }}
            sx={{ minWidth: 30 }}
            renderValue={(value) => {
                const option = alignOptions.find((opt) => opt.value === value);
                return option ? option.icon : <FormatAlignLeftIcon />;
            }}
            className={styles.selectWithoutUnderline}
        >
            {alignOptions.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                    <ListItemIcon>{option.icon}</ListItemIcon>
                    {option.label}
                </MenuItem>
            ))}
        </Select>
    );
};
