/// <reference path="../Tile.d.ts" />
/// <reference path="../WallObject.d.ts" />
declare namespace net.runelite.api.events {
	export class WallObjectDespawned {
		/**
		 * The affected tile.
		 */
		private tile: Tile;
		/**
		 * The removed wall object.
		 */
		private wallObject: WallObject;
	}
}
