/// <reference path="../Tile.d.ts" />
/// <reference path="../WallObject.d.ts" />

declare namespace net.runelite.api.events {
	export class WallObjectSpawned {
		/**
		 * The affected tile.
		 */
		getTile(): Tile;
		setTile(tile: Tile): void;

		/**
		 * The newly spawned wall object.
		 */
		getWallObject(): WallObject;
		setWallObject(wallObject: WallObject): void;
	}
}
