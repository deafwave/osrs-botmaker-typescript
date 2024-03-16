/**
 * An enumeration of equipment slots in the inventory ItemContainer.
 *
 * These values are intended for use with the local players equipment
 * ItemContainer corresponding. For obtaining information about equipment
 * in the PlayerComposition, use net.runelite.api.kit.KitType.
 *
 * @see Client.getItemContainer(InventoryID)
 * @see InventoryID.EQUIPMENT
 */
declare enum EquipmentInventorySlot {
	HEAD = 0,
	CAPE = 1,
	AMULET = 2,
	WEAPON = 3,
	BODY = 4,
	SHIELD = 5,
	LEGS = 7,
	GLOVES = 9,
	BOOTS = 10,
	RING = 12,
	AMMO = 13,
}
