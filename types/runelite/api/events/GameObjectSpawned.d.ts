/// <reference path="../Tile.d.ts" />
/// <reference path="../GameObject.d.ts" />

declare namespace net.runelite.api.events {
	export class GameObjectSpawned {
		/**
		 * The affected tile.
		 */
		private tile: Tile;
		/**
		 * The newly spawned game object.
		 */
		private gameObject: GameObject;
	}
}
