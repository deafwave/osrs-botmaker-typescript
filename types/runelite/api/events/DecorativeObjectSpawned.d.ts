/// <reference path="../Tile.d.ts" />
/// <reference path="../DecorativeObject.d.ts" />
declare namespace net.runelite.api.events {
	export class DecorativeObjectSpawned {
		/**
		 * The affected tile.
		 */
		getTile(): Tile;
		setTile(tile: Tile): void;

		/**
		 * The newly spawned decorative object.
		 */
		getDecorativeObject(): DecorativeObject;
		setDecorativeObject(decorativeObject: DecorativeObject): void;
	}
}
