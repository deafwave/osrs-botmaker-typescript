/// <reference path="../NPC.d.ts" />
/// <reference path="../NPCComposition.d.ts" />
declare namespace net.runelite.api.events {
	export class NpcChanged {
		/**
		 * The NPC of which the composition changed.
		 */
		getNpc(): NPC;

		/**
		 * The old composition of the NPC
		 */
		getOld(): NPCComposition;
	}
}
