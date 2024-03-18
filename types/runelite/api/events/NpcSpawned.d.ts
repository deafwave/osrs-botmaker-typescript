/// <reference path="../NPC.d.ts" />
/// <reference path="../Actor.d.ts" />
declare namespace net.runelite.api.events {
	export class NpcSpawned {
		/**
		 * The spawned NPC.
		 */
		private readonly npc: NPC;

		getActor(): Actor;
	}
}
