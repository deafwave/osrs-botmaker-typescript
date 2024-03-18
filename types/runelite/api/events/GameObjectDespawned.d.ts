/// <reference path="../Tile.d.ts" />
/// <reference path="../GameObject.d.ts" />
declare namespace net.runelite.api.events {
	export class GameObjectDespawned {
		/**
		 * The affected tile.
		 */
		private tile: Tile;
		/**
		 * The removed game object.
		 */
		private gameObject: GameObject;
	}
}
