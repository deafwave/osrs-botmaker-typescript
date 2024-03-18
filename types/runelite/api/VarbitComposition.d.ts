declare namespace net.runelite.api {
	export interface VarbitComposition {
		/**
		 * The varp index for this varbit
		 *
		 * @return
		 */
		getIndex(): number;

		/**
		 * The least significant bit of the varbit
		 *
		 * @return
		 */
		getLeastSignificantBit(): number;

		/**
		 * The most significant bit of the varbit (inclusive)
		 *
		 * @return
		 */
		getMostSignificantBit(): number;
	}
}
