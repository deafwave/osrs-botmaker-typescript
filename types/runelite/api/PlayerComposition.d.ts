/// <reference path="./kit/KitType.d.ts" />
/// <reference path="ColorTextureOverride.d.ts" />
declare namespace net.runelite.api {
	/**
	 * Represents the template of a player.
	 */
	export interface PlayerComposition {
		/**
		 * Checks if the player is female.
		 *
		 * @return true if the player is female
		 * @deprecated use getGender
		 */

		isFemale(): boolean;

		/**
		 * Get the player gender
		 *
		 * @return 0 for male, 1 for female
		 */
		getGender(): number;

		/**
		 * Get the body part colors for this player composition.
		 *
		 * @return an array of the colors, always size 5
		 */
		getColors(): number[];

		/**
		 * Gets an array of IDs related to equipment slots.
		 * <p>
		 * If the ID for a specific slot is between 256 and 512, subtracting
		 * 256 will result in the kit ID. Values above 512 indicate an item
		 * and can be converted to the item ID by subtracting 512.
		 *
		 * @return the equipment IDs
		 */
		getEquipmentIds(): number[];

		/**
		 * Gets the equipment ID of a particular slot.
		 *
		 * @param type equipment slot
		 * @return the equipment ID
		 */
		getEquipmentId(type: net.runelite.api.kit.KitType): number;

		/**
		 * Gets the kit ID of a particular slot.
		 *
		 * @param type equipment slot
		 * @return the kit ID
		 */
		getKitId(type: net.runelite.api.kit.KitType): number;

		/**
		 * Update the cached hash value for player equipment
		 * Used to cache the player models based on equipment.
		 */

		setHash(): void;

		setTransformedNpcId(id: number): void;

		/**
		 * Get the overrides for this player composition, indexed by kit id. The overrides
		 * replace the target color/textures for the item instead of using the target colors/textures
		 * from the item composition. Only works if the kittype is an item.
		 * @return
		 */

		getColorTextureOverrides(): ColorTextureOverride[] | null;
	}
}
