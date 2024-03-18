declare namespace net.runelite.api {
	/**
	 * Hint arrow types.
	 */
	export class HintArrowType {
		/**
		 * No hint arrow present.
		 */
		static readonly NONE = 0;
		/**
		 * Hint arrow is pointing to a player.
		 */
		static readonly PLAYER = 10;
		/**
		 * Hint arrow is pointing to an NPC.
		 */
		static readonly NPC = 1;
		/**
		 * Hint arrow is pointing at a position in the world.
		 */
		static readonly COORDINATE = 2;
	}
}
