/// <reference path="../Player.d.ts" />
/// <reference path="../Actor.d.ts" />
declare namespace net.runelite.api.events {
	export class PlayerSpawned {
		/**
		 * The spawned player.
		 */
		getPlayer(): Player;

		getActor(): Actor;
	}
}
