/// <reference path="../Tile.d.ts" />
/// <reference path="../WallObject.d.ts" />
declare namespace net.runelite.api.events {
	export class WallObjectDespawned {
		/**
		 * The affected tile.
		 */
		getTile(): Tile;
		setTile(tile: Tile): void;

		/**
		 * The removed wall object.
		 */
		getWallObject(): WallObject;
		setWallObject(wallObject: WallObject): void;
	}
}
