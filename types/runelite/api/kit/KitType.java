Convert this Java code to a typescript .d.ts file. Use external references with naming intention instead of imports, maintain comments, and do not export anything. Only return the code block:

package net.runelite.api.kit;

import net.runelite.api.PlayerComposition;

/**
 * Represents an equipment slot in a players composition.
 * <p>
 * These values are intended for use with {@link PlayerComposition} equipment
 * slots. For obtaining information about equipment in the local players
 * equipment {@link net.runelite.api.ItemContainer}, use
 * {@link net.runelite.api.EquipmentInventorySlot}.
 */
public enum KitType
{
	HEAD,
	CAPE,
	AMULET,
	WEAPON,
	TORSO,
	SHIELD,
	ARMS,
	LEGS,
	HAIR,
	HANDS,
	BOOTS,
	JAW;

	/**
	 * Gets the raw equipment index for use in {@link PlayerComposition#getEquipmentIds()}.
	 *
	 * @return raw equipment index
	 */
	public int getIndex()
	{
		return ordinal();
	}
}
