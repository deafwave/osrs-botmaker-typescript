/// <reference path="../ItemContainer.d.ts" />
declare namespace net.runelite.api.events {
	export class ItemContainerChanged {
		/**
		 * The modified container's ID.
		 */
		getContainerId(): number;
		/**
		 * The modified item container.
		 */
		getItemContainer(): ItemContainer;
	}
}
