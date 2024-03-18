/// <reference path="Nameable.d.ts" />
declare namespace net.runelite.api {
	/**
	 * Represents a player in the chat.
	 */
	export interface ChatPlayer extends Nameable {
		getWorld(): number;
	}
}
