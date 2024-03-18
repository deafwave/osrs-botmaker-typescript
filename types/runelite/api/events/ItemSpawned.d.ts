/// <reference path="../Tile.d.ts" />
/// <reference path="../TileItem.d.ts" />
declare namespace net.runelite.api.events {
	export class ItemSpawned {
		getTile(): Tile;
		getItem(): TileItem;
	}
}
