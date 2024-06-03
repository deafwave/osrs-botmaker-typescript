declare namespace java.awt {
	export class Font {
        static BOLD: number;
        static CENTER_BASELINE: number;
        static DIALOG: string;
        static DIALOG_INPUT: string;
        static HANGING_BASELINE: number;
        static ITALIC: number;
        static LAYOUT_LEFT_TO_RIGHT: number;
        static LAYOUT_NO_LIMIT_CONTEXT: number;
        static LAYOUT_NO_START_CONTEXT: number;
        static LAYOUT_RIGHT_TO_LEFT: number;
        static MONOSPACED: string;
        static PLAIN: number;
        static ROMAN_BASELINE: number;
        static SANS_SERIF: string;
        static SERIF: string;
        static TRUETYPE_FONT: number;
        static TYPE1_FONT: number;

        protected name: string;
        protected size: number;
        protected style: number;

        [key: string]: any;
    }
}
