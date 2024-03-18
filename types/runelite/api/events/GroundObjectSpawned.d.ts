/// <reference path="../Tile.d.ts" />
/// <reference path="../GroundObject.d.ts" />
declare namespace net.runelite.api.events {
	export class GroundObjectSpawned {
		/**
		 * The affected tile.
		 */
		private tile: Tile;
		/**
		 * The newly spawned ground object.
		 */
		private groundObject: GroundObject;
	}
}
