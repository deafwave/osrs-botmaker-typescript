declare namespace net.runelite.client.ui.overlay {
	export class OverlayLayer {
		static ABOVE_SCENE: OverlayLayer;
		static ABOVE_WIDGETS: OverlayLayer;
		static ALWAYS_ON_TOP: OverlayLayer;
		static MANUAL: OverlayLayer;
		static UNDER_WIDGETS: OverlayLayer;

		/**
		 * Returns the enum constant of this type with the specified name.
		 * @param name The name of the enum constant to return.
		 * @returns The enum constant with the specified name.
		 */
		static valueOf(name: string): OverlayLayer;

		/**
		 * Returns an array containing the constants of this enum type, in the order they are declared.
		 * @returns An array containing the constants of this enum type.
		 */
		static values(): OverlayLayer[];
	}
}
