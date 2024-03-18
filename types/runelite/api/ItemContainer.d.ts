/// <reference path="RuneliteNode.d.ts" />
/// <reference path="Item.d.ts" />
declare namespace net.runelite.api {
	/**
	 * Represents an inventory that contains items.
	 */
	export interface ItemContainer extends RuneliteNode {
		/**
		 * Get the item container id
		 *
		 * @return
		 * @see InventoryID
		 */
		getId(): number;

		/**
		 * Gets an array of all items in the container.
		 *
		 * @return the items held
		 */

		getItems(): Item[];

		/**
		 * Gets an item from the container at the given slot.
		 *
		 * @param slot
		 * @return the item
		 * @see Item
		 */

		getItem(slot: number): Item | null;

		/**
		 * Check if this item container contains the given item
		 *
		 * @param itemId
		 * @return
		 * @see ItemID
		 */
		contains(itemId: number): boolean;

		/**
		 * Counts how many of an item this item container contains
		 *
		 * @param itemId
		 * @return
		 * @see ItemID
		 */
		count(itemId: number): number;

		/**
		 * Get the number of slots in this item container. This includes empty slots.
		 * For example for the player inventory it can be 28 even with no items in the inventory.
		 * @see #count() to get the number of filled slots instead
		 * @return
		 */
		size(): number;

		/**
		 * Get the total number of filled slots in the item container.
		 * @return
		 */
		count(): number;
	}
}
