/// <reference path="../Tile.d.ts" />
/// <reference path="../DecorativeObject.d.ts" />
declare namespace net.runelite.api.events {
	export class DecorativeObjectDespawned {
		/**
		 * The affected tile.
		 */
		getTile(): Tile;
		setTile(tile: Tile): void;

		/**
		 * The removed decorative object.
		 */
		getDecorativeObject(): DecorativeObject;
		setDecorativeObject(decorativeObject: DecorativeObject): void;
	}
}
