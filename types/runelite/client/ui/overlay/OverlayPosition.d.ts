declare namespace net.runelite.client.ui.overlay {
    export class OverlayPosition {
		static ABOVE_CHATBOX_RIGHT: string;
		static BOTTOM_LEFT: string;
		static BOTTOM_RIGHT: string;
		static CANVAS_TOP_RIGHT: string;
		static DETACHED: string;
		static DYNAMIC: string;
		static TOOLTIP: string;
		static TOP_CENTER: string;
		static TOP_LEFT: string;
		static TOP_RIGHT: string;

		/**
		 * Returns the enum constant of this type with the specified name.
		 * @param name The name of the enum constant to return.
		 * @returns The enum constant with the specified name.
		 */
        static valueOf(name: string): OverlayPosition;

		/**
		 * Returns an array containing the constants of this enum type, in the order they are declared.
		 * @returns An array containing the constants of this enum type.
		 */
        static values(): OverlayPosition[];
    }
}