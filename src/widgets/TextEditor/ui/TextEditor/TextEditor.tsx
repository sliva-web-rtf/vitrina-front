import { Box, Stack } from '@mui/material';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

import { EditorToolbar, formats, modules } from '../EditorToolbar/EditorToolbar';

interface TextEditorProps {
    index: number;
    onChange: (innerValue: string) => void;
    value?: string;
}

export const TextEditor = (props: TextEditorProps) => {
    const { index, value, onChange } = props;

    const handleChange = (innerValue: string) => {
        onChange(innerValue);
    };

    return (
        <Stack spacing={2}>
            <Box>
                <EditorToolbar id={`t${index}`} />
                <ReactQuill
                    theme="snow"
                    modules={modules(`t${index}`)}
                    formats={formats}
                    value={value}
                    onChange={handleChange}
                />
            </Box>
            {/* <Typography variant="h4">Предосмотр:</Typography> */}
            {/* <Box className="customTemplate" dangerouslySetInnerHTML={{ __html: value ?? '' }} /> */}
        </Stack>
    );
};
