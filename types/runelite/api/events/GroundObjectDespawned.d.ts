/// <reference path="../Tile.d.ts" />
/// <reference path="../GroundObject.d.ts" />

declare namespace net.runelite.api.events {
	export class GroundObjectDespawned {
		/**
		 * The affected tile.
		 */
		private tile: Tile;
		/**
		 * The removed ground object.
		 */
		private groundObject: GroundObject;
	}
}
