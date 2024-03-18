/// <reference path="../Tile.d.ts" />
/// <reference path="../GroundObject.d.ts" />
declare namespace net.runelite.api.events {
	export class GroundObjectSpawned {
		/**
		 * The affected tile.
		 */
		getTile(): Tile;
		setTile(tile: Tile): void;

		/**
		 * The newly spawned ground object.
		 */
		getGroundObject(): GroundObject;
		setGroundObject(groundObject: GroundObject): void;
	}
}
