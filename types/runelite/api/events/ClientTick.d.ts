declare namespace net.runelite.api.events {
	/**
	 * Posted every client tick (20ms).
	 *
	 * Client ticks are roughly broken down into
	 * 1. packet processing
	 * 2. interface tick
	 * 3. client tick (this event)
	 * 4. clientscript execution
	 * 5. menu sorting (see {@link PostMenuSort})
	 * 6. menu click detection and drag handling
	 * 7. {@link PostClientTick} event
	 */
	export class ClientTick {}
}
