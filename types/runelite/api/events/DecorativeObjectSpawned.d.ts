/// <reference path="Tile.d.ts" />
/// <reference path="DecorativeObject.d.ts" />

/**
 * Represents an event where a DecorativeObject is attached to a Tile in TypeScript.
 */
declare class DecorativeObjectSpawned {
	private readonly tile: Tile;
	private readonly decorativeObject: DecorativeObject;

	constructor(tile: Tile, decorativeObject: DecorativeObject);
}
