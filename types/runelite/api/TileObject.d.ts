/// <reference path="coords/WorldPoint.d.ts" />
/// <reference path="coords/LocalPoint.d.ts" />
/// <reference path="Point.d.ts" />
/// <reference path="../../java/index.d.ts" />
/**
 * Represents an object on a Tile
 */
interface TileObject {
	/**
	 * A bitfield containing various flags:
	 * <pre>{@code
	 * (RL) plane = bits >> 49 & 3
	 * id = bits >> 17 & 0xffffffff
	 * wall = bits >> 16 & 1
	 * type = bits >> 14 & 3
	 * scene y = bits >> 7 & 127
	 * scene x = bits >> 0 & 127
	 * }</pre>
	 * Type 0 = player, 1 = npc, 2 = game object, 3 = item
	 */
	getHash(): number;

	/**
	 * Gets the x-axis coordinate of the object in local context.
	 *
	 * @see LocalPoint
	 */
	getX(): number;

	/**
	 * Gets the y-axis coordinate of the object in local context.
	 *
	 * @see LocalPoint
	 */
	getY(): number;

	/**
	 * Gets the vertical coordinate of this object
	 */
	getZ(): number;

	/**
	 * Gets the plane of the tile that the object is on.
	 */
	getPlane(): number;

	/**
	 * Gets the ID of the object.
	 *
	 * @see ObjectID
	 * @see NullObjectID
	 */
	getId(): number;

	/**
	 * Get the world location for this object. For objects which are larger than 1 tile, this is the
	 * center most tile, rounded to the south-west.
	 * @return
	 */

	getWorldLocation(): WorldPoint;

	/**
	 * Get the local location for this object. This point is the center point of the object.
	 * @return
	 */

	getLocalLocation(): LocalPoint;

	/**
	 * Calculates the position of the center of this tile on the canvas
	 */

	getCanvasLocation(): Point | null;

	/**
	 * Calculates the position of the center of this tile on the canvas
	 *
	 * @param zOffset Vertical offset to apply before projection
	 */

	getCanvasLocation(zOffset: number): Point | null;

	/**
	 * Creates a polygon outlining the tile this object is on
	 */

	getCanvasTilePoly(): Polygon | null;

	/**
	 * Calculates the canvas point to center {@code text} above the tile this object is on.
	 *
	 * @param graphics the graphics to use for font size calculation
	 * @param zOffset Vertical offset to apply before projection
	 * @return the canvas point to draw the text at
	 */

	getCanvasTextLocation(
		graphics: Graphics2D,
		text: string,
		zOffset: number,
	): Point | null;

	/**
	 * Gets a point on the canvas of where this objects mini-map indicator
	 * should appear.
	 *
	 * @return mini-map location on canvas
	 */

	getMinimapLocation(): Point | null;

	/**
	 * Calculate the on-screen clickable area of the object.
	 */

	getClickbox(): Shape | null;
}
