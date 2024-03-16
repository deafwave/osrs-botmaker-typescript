/**
 * Represents an event in TypeScript where a game object is added to a tile.
 */
declare class GameObjectSpawned {
	private readonly tile: Tile;
	private readonly gameObject: GameObject;

	constructor(tile: Tile, gameObject: GameObject);
}
