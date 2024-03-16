/// <reference path="../../java/index.d.ts" />
/// <reference path="TileObject.d.ts" />
/// <reference path="Renderable.d.ts" />
/**
 * Represents a decorative object, such as an object on a wall.
 */
interface DecorativeObject extends TileObject {
	/**
	 * Gets the convex hull of the objects model.
	 *
	 * @returns the convex hull
	 * @see Jarvis
	 */
	getConvexHull(): Shape;
	getConvexHull2(): Shape;

	getRenderable(): Renderable;
	getRenderable2(): Renderable;

	/**
	 * Decorative object x offset. This is added to the x position of the object, and is used to
	 * account for walls of varying widths.
	 */
	getXOffset(): number;

	/**
	 * Decorative object y offset. This is added to the z position of the object, and is used to
	 * account for walls of varying widths.
	 */
	getYOffset(): number;

	/**
	 * A bitfield containing various flags:
	 * <pre>{@code
	 * object type id = bits & 0x20
	 * orientation (0-3) = bits >>> 6 & 3
	 * supports items = bits >>> 8 & 1
	 * }</pre>
	 */
	getConfig(): number;
}
