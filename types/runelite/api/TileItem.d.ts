/// <reference path="Renderable.d.ts" />
declare namespace net.runelite.api {
	/**
	 * Represents an item inside an {@link ItemLayer}.
	 */
	export interface TileItem extends Renderable {
		/**
		 * @return the ID of the item
		 * @see ItemID
		 */
		getId(): number;

		getQuantity(): number;
	}
}
