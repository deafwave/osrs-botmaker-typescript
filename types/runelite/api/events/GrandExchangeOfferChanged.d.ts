/// <reference path="../GrandExchangeOffer.d.ts" />

declare namespace net.runelite.api.events {
	export class GrandExchangeOfferChanged {
		/**
		 * The offer that has been modified.
		 */
		private offer: GrandExchangeOffer;
		/**
		 * The index value of the slot.
		 */
		private slot: number;
	}
}
