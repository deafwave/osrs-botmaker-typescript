/// <reference path="../GrandExchangeOffer.d.ts" />

declare namespace net.runelite.api.events {
	export class GrandExchangeOfferChanged {
		/**
		 * The offer that has been modified.
		 */
		getOffer(): GrandExchangeOffer;
		setOffer(offer: GrandExchangeOffer): void;

		/**
		 * The index value of the slot.
		 */
		getSlot(): number;
		setSlot(slot: number): void;
	}
}
