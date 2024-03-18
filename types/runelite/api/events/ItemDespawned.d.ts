/// <reference path="../Tile.d.ts" />
/// <reference path="../TileItem.d.ts" />
declare namespace net.runelite.api.events {
	/**
	 * Called when an item pile despawns from the ground. When the client loads a new scene,
	 * all item piles are implicitly despawned, and despawn events will not be sent.
	 */
	export class ItemDespawned {
		getTile(): Tile;
		getItem(): TileItem;
	}
}
