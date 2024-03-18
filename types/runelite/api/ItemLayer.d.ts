/// <reference path="TileObject.d.ts" />
/// <reference path="Renderable.d.ts" />
declare namespace net.runelite.api {
	/**
	 * Represents a pile of items held by a tile.
	 */
	export interface ItemLayer extends TileObject {
		/**
		 * Gets the height of the layer.
		 *
		 * @return the height
		 */
		getHeight(): number;

		/**
		 * Gets the item at the bottom of the pile.
		 *
		 * @return the bottom item
		 */
		getBottom(): Renderable;

		/**
		 * Gets the item at the middle of the pile.
		 *
		 * @return the middle item
		 */
		getMiddle(): Renderable;

		/**
		 * Gets the item at the top of the pile.
		 *
		 * @return the top item
		 */
		getTop(): Renderable;
	}
}
