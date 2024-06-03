declare namespace net.runelite.client.ui.overlay.components {
    export class ComponentOrientation {

        static HORIZONTAL: string;
		static VERTICAL: string;

		/**
		 * Returns the enum constant of this type with the specified name.
		 * @param name The name of the enum constant to return.
		 * @returns The enum constant with the specified name.
		 */
        static valueOf(name: string): ComponentOrientation;

		/**
		 * Returns an array containing the constants of this enum type, in the order they are declared.
		 * @returns An array containing the constants of this enum type.
		 */
        static values(): ComponentOrientation[];
    }
}