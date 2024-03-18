declare namespace net.runelite.api.events {
	export class GrandExchangeSearched {
		/**
		 * Whether or not the event has been consumed by a subscriber.
		 */
		isConsumed(): boolean;

		/**
		 * Marks the event as having been consumed.
		 * <p>
		 * Setting this state indicates that a plugin has set the GE
		 * search results and that the event will not be passed on
		 * for handling by vanilla client code.
		 */
		setConsumed(consumed: boolean): void;
	}
}
