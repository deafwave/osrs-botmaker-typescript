/// <reference path="Tile.d.ts" />
/// <reference path="DecorativeObject.d.ts" />

/**
 * Represents an event where a DecorativeObject attached to a Tile is removed in TypeScript.
 */
declare class DecorativeObjectDespawned {
	private readonly tile: Tile;
	private readonly decorativeObject: DecorativeObject;

	constructor(tile: Tile, decorativeObject: DecorativeObject);
}
