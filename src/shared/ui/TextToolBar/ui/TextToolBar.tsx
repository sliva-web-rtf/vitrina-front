import React, { forwardRef } from 'react';

import { Editor } from '@tiptap/core';
import { Paper, Divider } from '@mui/material';

import { FormatToggleButton } from './Button/FormatToggleButton';
import { BlockTypeSelect } from './Select/BlockTypeSelect/BlockTypeSelect';
import { FontSizeSelect } from './Select/FontSizeSelect/FontSizeSelect';
import { FontFamilySelect } from './Select/FontFamilySelect/FontFamilySelect';
import { AlignSelect } from './Select/AlignSelect/AlignSelect';

import { getFormatListOptions } from '../helpers/getFormatListOptions';
import { getFormatButtonOptions } from '../helpers/getFormatButtonOptions';

import styles from './TextToolBar.module.scss';

interface FormatProps {
    editor: Editor | null;
}

export const TextToolBar = forwardRef<HTMLDivElement, FormatProps>(({ editor }, ref) => {
    if (!editor) return null;

    const formatListOptions = getFormatListOptions(editor);
    const formatButtonOptions = getFormatButtonOptions(editor);

    return (
        <Paper
            elevation={1}
            className={styles.textToolBar}
            sx={{
                borderRadius: 2,
                px: 1.5,
                py: 0.5,
            }}
            ref={ref}
        >
            <BlockTypeSelect editor={editor} />

            <Divider orientation="vertical" variant="middle" flexItem />

            <FontFamilySelect editor={editor} />

            <Divider orientation="vertical" variant="middle" flexItem />

            <FontSizeSelect editor={editor} />

            <Divider orientation="vertical" variant="middle" flexItem />

            {formatButtonOptions.map((option) => (
                <FormatToggleButton
                    key={option.format}
                    editor={editor}
                    format={option.format}
                    icon={option.icon}
                    action={option.action}
                />
            ))}

            <Divider orientation="vertical" variant="middle" flexItem />

            <AlignSelect editor={editor} />

            {formatListOptions.map((option) => (
                <FormatToggleButton
                    key={option.format}
                    editor={editor}
                    format={option.format}
                    icon={option.icon}
                    action={option.action}
                />
            ))}
        </Paper>
    );
});
TextToolBar.displayName = 'MenuBar';
