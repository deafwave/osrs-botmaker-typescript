/// <reference path="../NPC.d.ts" />
/// <reference path="../Actor.d.ts" />
declare namespace net.runelite.api.events {
	export class NpcSpawned {
		/**
		 * The spawned NPC.
		 */
		getNpc(): NPC;

		getActor(): Actor;
	}
}
