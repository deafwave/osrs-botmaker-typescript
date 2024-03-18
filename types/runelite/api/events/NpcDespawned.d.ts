/// <reference path="../NPC.d.ts" />
/// <reference path="../Actor.d.ts" />
declare namespace net.runelite.api.events {
	export class NpcDespawned {
		/**
		 * The despawned NPC.
		 */

		getActor(): Actor;
		/** FIXME: MISPLACED, move it up and remove this comment block */
		constructor(npc: NPC);
	}
}
