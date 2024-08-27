import { Box, Stack, Typography } from '@mui/material';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

import { formats, modules, EditorToolbar } from '../EditorToolbar/EditorToolbar';

interface TextEditorProps {
    onChange: (value: string) => void;
    value: string;
}

export const TextEditor = (props: TextEditorProps) => {
    const { value, onChange } = props;

    const handleChange = (innerValue: string) => {
        onChange(innerValue);
    };

    return (
        <Stack spacing={2}>
            <Box>
                <EditorToolbar id="t1" />
                <ReactQuill
                    theme="snow"
                    modules={modules('t1')}
                    formats={formats}
                    value={value}
                    onChange={handleChange}
                />
            </Box>
            <Typography variant="h4">Предосмотр:</Typography>
            <Box className="customTemplate" dangerouslySetInnerHTML={{ __html: value }} />
        </Stack>
    );
};
