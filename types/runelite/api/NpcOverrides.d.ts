/**
 * Dynamically applied NPC effects
 */
interface NpcOverrides {
	/**
	 * Entirely replaces this NPC's models
	 */
	getModelIds(): number[] | null;

	/**
	 * Replaces this NPC's recolor values. Does not replace it's keys, which must be set statically
	 * in the cache
	 */
	getColorToReplaceWith(): number[] | null;

	getTextureToReplaceWith(): number[] | null;

	/**
	 * Causes this NPC to use the model of the local player instead
	 */
	useLocalPlayer(): boolean;
}
