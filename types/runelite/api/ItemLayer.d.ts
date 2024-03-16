/// <reference path="Renderable.d.ts" />
/// <reference path="TileObject.d.ts" />
/**
 * Represents a pile of items held by a tile.
 */
interface ItemLayer extends TileObject {
	/**
	 * Gets the height of the layer.
	 *
	 * @returns the height
	 */
	getHeight(): number;

	/**
	 * Gets the item at the bottom of the pile.
	 *
	 * @returns the bottom item
	 */
	getBottom(): Renderable;

	/**
	 * Gets the item at the middle of the pile.
	 *
	 * @returns the middle item
	 */
	getMiddle(): Renderable;

	/**
	 * Gets the item at the top of the pile.
	 *
	 * @returns the top item
	 */
	getTop(): Renderable;
}
