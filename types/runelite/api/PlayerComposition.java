Convert this Java code to a typescript .d.ts file. Use external references with naming intention instead of imports, maintain comments, and do not export anything. Only return the code block:



import javax.annotation.Nullable;
import net.runelite.api.annotations.VisibleForDevtools;
import net.runelite.api.kit.KitType;

/**
 * Represents the template of a player.
 */
public interface PlayerComposition
{
	/**
	 * Checks if the player is female.
	 *
	 * @return true if the player is female
	 * @deprecated use getGender
	 */
	@Deprecated
	boolean isFemale();

	/**
	 * Get the player gender
	 *
	 * @return 0 for male, 1 for female
	 */
	int getGender();

	/**
	 * Get the body part colors for this player composition.
	 *
	 * @return an array of the colors, always size 5
	 */
	int[] getColors();

	/**
	 * Gets an array of IDs related to equipment slots.
	 * <p>
	 * If the ID for a specific slot is between 256 and 512, subtracting
	 * 256 will result in the kit ID. Values above 512 indicate an item
	 * and can be converted to the item ID by subtracting 512.
	 *
	 * @return the equipment IDs
	 */
	int[] getEquipmentIds();

	/**
	 * Gets the equipment ID of a particular slot.
	 *
	 * @param type equipment slot
	 * @return the equipment ID
	 */
	int getEquipmentId(KitType type);

	/**
	 * Gets the kit ID of a particular slot.
	 *
	 * @param type equipment slot
	 * @return the kit ID
	 */
	int getKitId(KitType type);

	/**
	 * Update the cached hash value for player equipment
	 * Used to cache the player models based on equipment.
	 */
	@VisibleForDevtools
	void setHash();

	@VisibleForDevtools
	void setTransformedNpcId(int id);

	/**
	 * Get the overrides for this player composition, indexed by kit id. The overrides
	 * replace the target color/textures for the item instead of using the target colors/textures
	 * from the item composition. Only works if the kittype is an item.
	 * @return
	 */
	@Nullable
	ColorTextureOverride[] getColorTextureOverrides();
}
