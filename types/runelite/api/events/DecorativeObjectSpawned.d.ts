/// <reference path="../Tile.d.ts" />
/// <reference path="../DecorativeObject.d.ts" />
declare namespace net.runelite.api.events {
	export class DecorativeObjectSpawned {
		/**
		 * The affected tile.
		 */
		private tile: Tile;
		/**
		 * The newly spawned decorative object.
		 */
		private decorativeObject: DecorativeObject;
	}
}
