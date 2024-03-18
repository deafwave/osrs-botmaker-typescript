/// <reference path="../NPC.d.ts" />
/// <reference path="../NPCComposition.d.ts" />
declare namespace net.runelite.api.events {
	export class NpcChanged {
		/**
		 * The NPC of which the composition changed.
		 */
		private readonly npc: NPC;

		/**
		 * The old composition of the NPC
		 */
		private readonly old: NPCComposition;
	}
}
