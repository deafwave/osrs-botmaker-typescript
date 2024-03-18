/// <reference path="../TileItem.d.ts" />
/// <reference path="../Tile.d.ts" />
declare namespace net.runelite.api.events {
	/**
	 * Called when the quantity of an item pile changes.
	 */
	export class ItemQuantityChanged {
		getTile(): Tile;
		getItem(): TileItem;
		getOldQuantity(): number;
		getNewQuantity(): number;
	}
}
