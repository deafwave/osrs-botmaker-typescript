/// <reference path="../Tile.d.ts" />
/// <reference path="../GameObject.d.ts" />

declare namespace net.runelite.api.events {
	export class GameObjectSpawned {
		/**
		 * The affected tile.
		 */
		getTile(): Tile;
		setTile(tile: Tile): void;

		/**
		 * The newly spawned game object.
		 */
		getGameObject(): GameObject;
		setGameObject(gameObject: GameObject): void;
	}
}
