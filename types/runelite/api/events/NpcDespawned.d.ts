/// <reference path="../NPC.d.ts" />
/// <reference path="../Actor.d.ts" />
declare namespace net.runelite.api.events {
	/**
	 * An event where an {@link NPC} has despawned.
	 */
	export class NpcDespawned {
		/**
		 * The despawned NPC.
		 */
		getNpc(): NPC;

		getActor(): Actor;
	}
}
