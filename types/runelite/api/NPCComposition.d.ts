/**
 * Information about a specific NpcID
 */
interface NPCComposition extends ParamHolder {
	/**
	 * Gets the name of the NPC.
	 */
	getName(): string;

	/**
	 * Gets the model IDs that compose this NPC.
	 */
	getModels(): number[];

	/**
	 * The 5 menuops this NPC has when in world. Index 0 corresponds to
	 * NPC_FIRST_OPTION, Index 2 to NPC_SECOND_OPTION and so on.
	 */
	getActions(): string[];

	/**
	 * NPC can be interacting with via menu options
	 * @return
	 */
	isInteractible(): boolean;

	/**
	 * Gets whether the NPC is visible on the mini-map.
	 */
	isMinimapVisible(): boolean;

	isVisible(): boolean;

	/**
	 * Gets the ID of the NPC.
	 *
	 * @see NpcID
	 */
	getId(): number;

	/**
	 * @return the combat level, -1 if none
	 */
	getCombatLevel(): number;

	/**
	 * Get the NpcIDs of NPCs this can transform into, depending
	 * on a Varbits or VarPlayer
	 */
	getConfigs(): number[];

	/**
	 * Get the NPC composition the player's state says this NPC should
	 * transmogrify into.
	 *
	 * @throws NullPointerException if getConfigs() is null
	 */
	transform(): NPCComposition;

	/**
	 * How many tiles wide this NPC is
	 */
	getSize(): number;

	/**
	 * If the npc is a follower, such as a pet. Is affected by the
	 * "Move follower options lower down" setting.
	 * @return
	 */
	isFollower(): boolean;

	/**
	 * Get the colors to be replaced on this npc's model for this npc.
	 * @return the colors to be replaced
	 */
	getColorToReplace(): number[] | null;

	/**
	 * Get the colors applied to this npc's model for this npc.
	 * @return the colors to replace with
	 */
	getColorToReplaceWith(): number[] | null;

	/**
	 * Horizontal scaling of the npc model (1/128th of a tile).
	 * @return
	 */
	getWidthScale(): number;

	/**
	 * Vertical scaling of the npc model (1/128th of a tile).
	 * @return
	 */
	getHeightScale(): number;
}
