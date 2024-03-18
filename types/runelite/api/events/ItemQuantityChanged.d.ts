/// <reference path="../TileItem.d.ts" />
/// <reference path="../Tile.d.ts" />
declare namespace net.runelite.api.events {
	/**
	 * Called when the quantity of an item pile changes.
	 */
	export class ItemQuantityChanged {
		private readonly tile: Tile;
		private readonly item: TileItem;
		private readonly oldQuantity: number;
		private readonly newQuantity: number;
	}
}
