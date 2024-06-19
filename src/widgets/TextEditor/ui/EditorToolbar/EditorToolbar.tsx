import { memo } from 'react';
import { Quill } from 'react-quill';

const Size = Quill.import('formats/size');
Size.whitelist = ['extra-small', 'small', 'medium', 'large'];
Quill.register(Size, true);

export const modules = (id: string) => ({
    toolbar: {
        container: '#' + id,
    },
    history: {
        delay: 500,
        maxStack: 100,
        userOnly: true,
    },
});

export const formats = [
    'header',
    'font',
    'size',
    'bold',
    'italic',
    'underline',
    'align',
    'strike',
    'script',
    'blockquote',
    'background',
    'list',
    'bullet',
    'indent',
    'link',
    'image',
    'video',
    'color',
    'code-block',
];

interface EditorToolbarProps {
    id: string;
}

export const EditorToolbar = memo((props: EditorToolbarProps) => {
    const { id } = props;
    return (
        <>
            {id && (
                <div id={id}>
                    <span className="ql-formats">
                        <button className="ql-bold" />
                        <button className="ql-italic" />
                        <button className="ql-underline" />
                        <button className="ql-strike" />
                    </span>
                    <span className="ql-formats">
                        <select defaultValue="medium" className="ql-size">
                            <option value="extra-small">Extra Small</option>
                            <option value="small">Small</option>
                            <option value="medium">
                                Medium
                            </option>
                            <option value="large">Large</option>
                        </select>
                        <select defaultValue='normal' className="ql-header">
                            <option value="1">Heading 1</option>
                            <option value="2">Heading 2</option>
                            <option value="3">Heading 3</option>
                            <option value="4">Heading 4</option>
                            <option value="5">Heading 5</option>
                            <option value="6">Heading 6</option>
                            <option value="normal">
                                Normal
                            </option>
                        </select>
                    </span>
                    <span className="ql-formats">
                        <button className="ql-list" value="ordered" />
                        <button className="ql-list" value="bullet" />
                        <button className="ql-indent" value="-1" />
                        <button className="ql-indent" value="+1" />
                    </span>
                    <span className="ql-formats">
                        <button className="ql-script" value="super" />
                        <button className="ql-script" value="sub" />
                    </span>
                    <span className="ql-formats">
                        <select className="ql-color" />
                        <select className="ql-background" />
                    </span>
                    <span className="ql-formats">
                        <button className="ql-link" />
                    </span>
                    <span className="ql-formats">
                        <button className="ql-code-block" />
                    </span>
                </div>
            )}
        </>
    );
});
