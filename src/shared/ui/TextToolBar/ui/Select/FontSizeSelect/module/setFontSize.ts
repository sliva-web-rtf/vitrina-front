// extensions/FontSize.ts
import { Mark, mergeAttributes } from '@tiptap/core';

declare module '@tiptap/core' {
    interface Commands<ReturnType = any> {
        fontSize: {
            setFontSize: (fontSize: string) => ReturnType;
            unsetFontSize: () => ReturnType;
        };
    }
}

export const FontSize = Mark.create({
    name: 'fontSize',

    addOptions() {
        return {
            HTMLAttributes: {},
        };
    },

    addAttributes() {
        return {
            fontSize: {
                default: null,
                parseHTML: (element) => element.style.fontSize || null,
                renderHTML: (attributes) => {
                    if (!attributes.fontSize) return {};
                    return {
                        style: `font-size: ${attributes.fontSize}`,
                    };
                },
            },
        };
    },

    parseHTML() {
        return [
            {
                style: 'font-size',
            },
        ];
    },

    renderHTML({ HTMLAttributes }) {
        return ['span', mergeAttributes(this.options.HTMLAttributes, HTMLAttributes), 0];
    },

    addCommands() {
        return {
            setFontSize:
                (fontSize: string) =>
                ({ commands }) => {
                    return commands.setMark(this.name, { fontSize });
                },
            unsetFontSize:
                () =>
                ({ commands }) => {
                    return commands.unsetMark(this.name);
                },
        };
    },
});
