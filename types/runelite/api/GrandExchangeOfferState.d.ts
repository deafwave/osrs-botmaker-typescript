declare namespace net.runelite.api {
	export enum GrandExchangeOfferState {
		/**
		 * An empty slot.
		 */
		EMPTY = 'EMPTY',
		/**
		 * A cancelled buy offer.
		 */
		CANCELLED_BUY = 'CANCELLED_BUY',
		/**
		 * A cancelled sell offer.
		 */
		CANCELLED_SELL = 'CANCELLED_SELL',
		/**
		 * A buy offer that is currently in progress.
		 */
		BUYING = 'BUYING',
		/**
		 * A buy offer that has completed.
		 */
		BOUGHT = 'BOUGHT',
		/**
		 * A sell offer that is currently in progress.
		 */
		SELLING = 'SELLING',
		/**
		 * A sell offer that has completed.
		 */
		SOLD = 'SOLD',
	}
}
