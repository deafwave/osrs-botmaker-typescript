declare namespace net.runelite.api.events {
	/**
	 * Posted when the game world the client wants to connect to has changed.
	 * This is posted after the world ID and type have updated, but before a new
	 * connection is established
	 *
	 * @see Client#getWorld()
	 * @see Client#getWorldType()
	 */
	export class WorldChanged {}
}
