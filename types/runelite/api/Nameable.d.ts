/// <reference path="../../java/index.d.ts" />
declare namespace net.runelite.api {
	/**
	 * Represents a chat entity that has a name.
	 */
	export interface Nameable extends Comparable<Nameable> {
		/**
		 * The name of the player.
		 *
		 * @return the name
		 */
		getName(): string;

		/**
		 * The previous name the player had.
		 *
		 * @return the previous name
		 */
		getPrevName(): string;
	}
}
