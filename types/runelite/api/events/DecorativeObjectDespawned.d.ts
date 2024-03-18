/// <reference path="../Tile.d.ts" />
/// <reference path="../DecorativeObject.d.ts" />
declare namespace net.runelite.api.events {
	export class DecorativeObjectDespawned {
		/**
		 * The affected tile.
		 */
		private tile: Tile;
		/**
		 * The removed decorative object.
		 */
		private decorativeObject: DecorativeObject;
	}
}
