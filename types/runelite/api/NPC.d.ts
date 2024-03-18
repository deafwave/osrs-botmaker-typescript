/// <reference path="Actor.d.ts" />
/// <reference path="NPCComposition.d.ts" />
/// <reference path="NpcOverrides.d.ts" />
declare namespace net.runelite.api {
	/**
	 * Represents a non-player character in the game.
	 */
	export interface NPC extends Actor {
		/**
		 * Gets the ID of the NPC.
		 *
		 * @return the ID of the NPC
		 * @see NpcID
		 */
		getId(): number;

		getName(): string;

		getCombatLevel(): number;

		/**
		 * Gets the index position of this NPC in the clients cached
		 * NPC array.
		 *
		 * @return the NPC index
		 * @see Client#getCachedNPCs()
		 */
		getIndex(): number;

		/**
		 * Gets the composition of this NPC.
		 *
		 * @return the composition
		 */
		getComposition(): NPCComposition;

		/**
		 * Get the composition for this NPC and transform it if required
		 *
		 * @return the transformed NPC
		 */

		getTransformedComposition(): NPCComposition | null;

		getModelOverrides(): NpcOverrides | null;

		getChatheadOverrides(): NpcOverrides | null;
	}
}
