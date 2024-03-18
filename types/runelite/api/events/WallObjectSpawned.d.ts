/// <reference path="../Tile.d.ts" />
/// <reference path="../WallObject.d.ts" />

declare namespace net.runelite.api.events {
	export class WallObjectSpawned {
		/**
		 * The affected tile.
		 */
		private tile: Tile;
		/**
		 * The newly spawned wall object.
		 */
		private wallObject: WallObject;
	}
}
