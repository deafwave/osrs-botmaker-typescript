/// <reference path="GrandExchangeOffer.d.ts" />

declare class GrandExchangeOfferChanged {
	/**
	 * The offer that has been modified.
	 */
	offer: GrandExchangeOffer;

	/**
	 * The index value of the slot.
	 */
	slot: number;
}
