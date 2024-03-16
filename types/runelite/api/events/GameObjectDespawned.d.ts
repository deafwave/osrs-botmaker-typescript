/**
 * Represents an event in TypeScript where a game object on a tile is removed.
 */
declare class GameObjectDespawned {
	private readonly tile: Tile;
	private readonly gameObject: GameObject;

	constructor(tile: Tile, gameObject: GameObject);
}
