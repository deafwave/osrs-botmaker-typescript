/// <reference path="../ItemContainer.d.ts" />
declare namespace net.runelite.api.events {
	export class ItemContainerChanged {
		/**
		 * The modified container's ID.
		 */
		private readonly containerId: number;
		/**
		 * The modified item container.
		 */
		private readonly itemContainer: ItemContainer;
	}
}
