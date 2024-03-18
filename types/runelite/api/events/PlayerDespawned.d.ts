/// <reference path="../Player.d.ts" />
/// <reference path="../Actor.d.ts" />
declare namespace net.runelite.api.events {
	export class PlayerDespawned {
		/**
		 * The despawned player.
		 */
		getPlayer(): Player;

		getActor(): Actor;
	}
}
