/// <reference path="../NPC.d.ts" />
/// <reference path="../Actor.d.ts" />
declare namespace net.runelite.api.events {
	/**
	 * An event where an {@link NPC} has spawned.
	 */
	export class NpcSpawned {
		/**
		 * The spawned NPC.
		 */
		getNpc(): NPC;

		getActor(): Actor;
	}
}
