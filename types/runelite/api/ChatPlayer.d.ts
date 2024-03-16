/// <reference path="Nameable.d.ts" />
/**
 * Represents a player in the chat.
 */
interface ChatPlayer extends Nameable {
	/**
	 * Gets the world ID of the player.
	 * @returns the world ID
	 */
	getWorld(): number;
}
