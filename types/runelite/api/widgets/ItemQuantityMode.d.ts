declare namespace net.runelite.api.widgets {
	/**
	 * Utility class mapping Widget ItemQuantityMode values
	 */
	export class ItemQuantityMode {
		/**
		 * Never show item quantity number
		 */
		static readonly NEVER = 0;

		/**
		 * Always show item quantity number
		 */
		static readonly ALWAYS = 1;

		/**
		 * Only show item quantity number if it's greater than 1
		 */
		static readonly STACKABLE = 2;
	}
}
