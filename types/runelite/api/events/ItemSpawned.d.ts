/// <reference path="../Tile.d.ts" />
/// <reference path="../TileItem.d.ts" />
declare namespace net.runelite.api.events {
	export class ItemSpawned {
		private readonly tile: Tile;
		private readonly item: TileItem;
	}
}
