/// <reference path="../../java/index.d.ts" />
/// <reference path="TileObject.d.ts" />
/// <reference path="Renderable.d.ts" />
/**
 * Represents an object on the ground of a tile.
 */
interface GroundObject extends TileObject {
	getRenderable(): Renderable;

	/**
	 * Gets the convex hull of the object's model.
	 *
	 * @see net.runelite.api.model.Jarvis
	 */
	getConvexHull(): Shape;

	/**
	 * A bitfield containing various flags:
	 * object type id = bits & 0x20
	 * orientation (0-3) = bits >>> 6 & 3
	 * supports items = bits >>> 8 & 1
	 */
	getConfig(): number;
}
