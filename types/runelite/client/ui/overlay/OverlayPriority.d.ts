declare namespace net.runelite.client.ui.overlay {
	export class OverlayPriority {
		static HIGH: string;
		static HIGHEST: string;
		static LOW: string;
		static MED: string;
		static NONE: string;

		/**
		 * Returns the enum constant of this type with the specified name.
		 * @param name The name of the enum constant to return.
		 * @returns The enum constant with the specified name.
		 */
		static valueOf(name: string): OverlayPriority;

		/**
		 * Returns an array containing the constants of this enum type, in the order they are declared.
		 * @returns An array containing the constants of this enum type.
		 */
		static values(): OverlayPriority[];
	}
}
